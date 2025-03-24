import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import Home from '@/views/home/Home.vue'
 
// 异步加载组件
const Product = () => import('@/views/product/index.vue')
const List = () => import('@/views/product/list/index.vue')
const Category = () => import('@/views/product/category/index.vue')
const Order = () => import('@/views/order/index.vue')
const OrderList = () => import('@/views/order/list/index.vue')
const OrderCollect = () => import('@/views/order/collect/index.vue')
const Advert = () => import('@/views/advert/index.vue')
const AdvertList = () => import('@/views/advert/list/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Layout,
    children:[
      { 
        path: '/',
        name: 'home',
        component:Home
      },{
        path:'/product', // 产品
        name:'product',
        component:Product,
        children:[
          {
            path:'list',
            name:'list',
            component:List
          },
          {
            path:'category',
            name:'category',
            component:Category
          }
        ]
      },{
        path:'/order',// 订单
        name:'order',
        component:Order,
        children:[
          {
            path:'order-list',
            name:'order-list',
            component:OrderList
          },
          {
            path:'order-collect',
            name:'order-collect',
            component:OrderCollect
          }
        ]
      },{
        path:'/advert', // 广告
        name:'advert',
        component:Advert,
        children:[
          {
            path:'advert-list',
            name:'advert-list',
            component:AdvertList
          }
        ]
      }
    ]
  },{
    path:'/login',
    name:'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
