import Dashboard from '../components/Dashboard/DashboardComponent'
import CostPrice from '../components/Dashboard/CostPriceComponent'

export default [
  {
    path: '/',
    name: 'fe.admin.dashboard',
    component: Dashboard,
    meta: {
      sub_title: 'Dashboard'
    }
  },
  {
    path: '/cost-price',
    name: 'fe.admin.cost_price',
    component: CostPrice,
    meta: {
      sub_title: 'Cost Price'
    }
  }
]
