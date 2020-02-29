/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const formRouter = {
  path: '/form',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '表单',
    icon: 'chart'
  },
  children: [
    {
      path: 'mode',
      component: () => import('@/views/form/mode'),
      name: 'ModeForm',
      meta: { title: '表单展示模式', noCache: true }
    },
    {
      path: 'full',
      component: () => import('@/views/form/full'),
      name: 'FullForm',
      meta: { title: '所有类型汇总', noCache: true }
    }
  ]
}

export default formRouter
