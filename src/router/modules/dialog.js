/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const dialogRouter = {
  path: '/dialog',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '弹框',
    icon: 'chart'
  },
  children: [
    {
      path: 'simple',
      component: () => import('@/views/dialog/simple'),
      name: 'SimpleDialog',
      meta: { title: '对话框', noCache: true }
    },
    {
      path: 'drawer',
      component: () => import('@/views/dialog/drawer'),
      name: 'DrawerDialog',
      meta: { title: '抽屉', noCache: true }
    }
  ]
}

export default dialogRouter
