/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const pageRouter = {
  path: '/page',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '页面',
    icon: 'chart'
  },
  children: [
    {
      path: 'simple',
      component: () => import('@/views/page/simple'),
      name: 'SimplePage',
      meta: { title: '简单页面', noCache: true }
    },
    {
      path: 'init',
      component: () => import('@/views/page/init'),
      name: 'InitPage',
      meta: { title: '页面初始化', noCache: true }
    },
    {
      path: 'form',
      component: () => import('@/views/page/form'),
      name: 'FormPage',
      meta: { title: '表单页面', noCache: true }
    }
  ]
}

export default pageRouter
