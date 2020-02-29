/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const tabRouter = {
  path: '/tab',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '选项卡',
    icon: 'chart'
  },
  children: [
    {
      path: 'normal',
      component: () => import('@/views/tab/normal'),
      name: 'NormalTab',
      meta: { title: '常规选项卡', noCache: true }
    },
    {
      path: 'form',
      component: () => import('@/views/tab/form'),
      name: 'FormTab',
      meta: { title: '表单中选项卡分组', noCache: true }
    }
  ]
}

export default tabRouter
