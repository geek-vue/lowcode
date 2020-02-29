/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const crudRouter = {
  path: '/crud',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '增删改查',
    icon: 'chart'
  },
  children: [
    {
      path: 'table',
      component: () => import('@/views/crud/table'),
      name: 'TableCrud',
      meta: { title: '表格模式', noCache: true }
    },
    {
      path: 'fixed',
      component: () => import('@/views/crud/fixed'),
      name: 'FixedCrud',
      meta: { title: '固定表头列', noCache: true }
    }
  ]
}

export default crudRouter
