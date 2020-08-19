import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todo',
      name: 'About',
      component: () => import('@/components/Todo.vue')
    },
    {
      path: '/helloworld',
      name: 'Helloworld',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/others',
      name: 'others',
      component: () => import('@/others/Index.vue')
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('@/ech/Index.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/map/Index.vue')
    },
    {
      path: '/fanpai',
      name: 'fanpai',
      component: () => import('@/fanpai/Index.vue')
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('@/css/Index.vue')
    },
    {
      path: '/cssblog',
      name: 'cssblog',
      component: () => import('@/css/MyBlog.vue')
    },
  ]
}) 

