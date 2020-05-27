import Vue from 'vue'
import Router from 'vue-router'

const Order = () => import('../pages/order/index.vue')
const OrderFood = () => import('../pages/orderFood/index.vue')
const Me= () => import('../pages/me/index.vue')
const CreateClassification= () => import('../pages/createClassification/index.vue')
const PublishProduct= () => import('../pages/publishProduct/index.vue')
const StoreSetting= () => import('../pages/storeSetting/index.vue')
const OrderOperation= () => import('../pages/orderOperation/index.vue')
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
      meta:{
        isShow:true
      }
    },
    {
      path: '/orderFood',
      component: OrderFood,
      meta:{
        isShow:true
      }
    },
    {
      path:'/me',
      component:Me,
      meta:{
        isShow:true
      }
    },
    {
      path:'/createClassification',
      component:CreateClassification,
    },
    {
      path:'/publishProduct',
      component:PublishProduct,
    },
    {
      path:'/storeSetting',
      component:StoreSetting,
    },
    {
      path:'/orderOperation',
      component:OrderOperation,
    }
  ]
})
