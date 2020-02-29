import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import router from '@/router'

const service = axios.create({
  // baseURL: 'http://172.16.1.171/geekplus-siptest',
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000
})

service.interceptors.request.use(
  config => {
    const { method, headers = {} } = config
    if (method.toLowerCase() === 'get' && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    if (error.response) {
      Message.error('网络异常')
    }
    return Promise.reject(error)
  }
)

// 备注前后端约定好 status为0 为成功页面， 其他为报错
service.interceptors.response.use(
  response => {
    const { data: { status, msg }} = response

    if (status === 0) {
      return response.data
    } else if (status === 2) { // 检查是否需要重新登录
      store.dispatch('user/resetToken').then(() => {
        router.push('/login')
      })
      Message({
        message: '登录超时',
        type: 'error',
        duration: 5 * 1000
      });
    } else if (status === 404) {
      return response.data
    } else if (status === 406) {
      return response.data
    } else if (status === 407) { // 没有登录,非法访问
        Message.error(msg || '网络异常');
        if (store && store.dispatch('user/resetToken')) {
            store.dispatch('user/resetToken').then(() => {
                router.push('/login');
            }, error => {
                router.push('/login');
            })
        } else {
            router.push('/login');
        }
    } else if (status === 500) { // 用户被锁定
        Message.error(msg || '网络异常');
        if (store && store.dispatch('user/resetToken')) {
            store.dispatch('user/resetToken').then(() => {
                router.push('/login');
            }, error => {
                router.push('/login');
            })
        } else {
            router.push('/login');
        }
    } else if (status === 3) {
      router.push('/403')
    } else if (status === 100 ) {
        if (response.data.data && response.data.data.sipErrorMessage){
            Message.error(response.data.data.sipErrorMessage);
        } else {
            Message.error(msg || '网络异常');
        }
        return Promise.reject('error');
    } else {
      if (response.status === 200) {
        if (response.config.url.endsWith('wmstoolbox/download')) {
          return response.data
        } else{
            Message.error(msg || '网络异常')
        }
      }else{
        Message.error(msg || '网络异常')
      }
    }
  },
  error => {
    // cancelLoading()
    if (error.response) {
      if (error.request.status === 403) {
        router.push('/403');
      } else if (error.request.status === 404) {
        router.push('/404');
      } else {
        Message.error('网络异常')
      }
    }
    return Promise.reject(error)
  }
)

export const GET = (url, params, options = {}) => service({ url, method: 'GET', params, ...options })
export const POST = (url, data, options = {}) => service({ url, method: 'POST', data, ...options })
export const DELETE = (url, data, options = {}) => service({ url, method: 'DELETE', data, ...options })
export const PUT = (url, data, options = {}) => service({ url, method: 'PUT', data, ...options })

export const doAjax = e => {
  const methodMap = { get: GET, post: POST, delete: DELETE, put: PUT }
  let method = 'get'
  let api = e.api.replace(/^(\w+):http/i, (a, b) => {
    method = b
    return 'http'
  }).replace(/\$([^\/]+)/g, (a, b) => {
    return e.formdata[b]
  })
  console.log(method, api)
  methodMap[method](api).then(({data}) => {
    console.log('data', data)
    e.feedback && MessageBox({
      title: e.feedback.title,
      message: e.feedback.body.replace(/(\\?)\$\{([^\}]*)\}/g, (str, slice, vars) => {
        return !slice ? data[vars] : str
      }),
      dangerouslyUseHTMLString: true
    })
  })
}

export default service
