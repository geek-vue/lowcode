import Empty from '@/layout/Empty'
import Preview from '@/views/page-maker/preview'
import { isArray, isObject } from './types'

const getRoute = data => {
  if (isArray(data)) {
    return data.map(item => getRoute(item))
  } else if (isObject(data)) {
    if (isArray(data.children) && data.children.length) {
      return {
        path: '/preview',
        component: Empty,
        name: data.label,
        meta: { title: data.label, icon: data.icon },
        children: getRoute(data.children)
      }
    }
    return {
      path: `/preview/${data.id}`,
      component: Preview,
      name: data.label,
      meta: { title: data.label, icon: data.icon }
    }
  }
}

export default getRoute