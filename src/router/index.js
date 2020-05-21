import Vue from 'vue'
import Router from 'vue-router'

const Order = () => import('../pages/order/index.vue')
const OrderFood = () => import('../pages/orderFood/index.vue')
const Me= () => import('../pages/me/index.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/orderFood',
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/orderFood',
      component: OrderFood,
    },
    {
      path:'/me',
      component:Me,
    }
  ]
})
