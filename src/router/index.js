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
    {
      path: '/flex',
      name: 'flex',
      component: () => import('@/css/myFlex.vue')
    },
    {
      path: '/elui',
      name: 'elementui',
      component: () => import('@/css/Elui.vue')
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('@/myaxios/Index.vue'),
      redirect: '/phone',
      children: [
        {
          path:'/phone',
          name:'phone',
          component: () => import('@/myaxios/Phone.vue')
        }
      ]
    },
    {
      path: '/room/:id',
      name: 'room',
      props: true,
      component: () => import("@/myaxios/MyWebsocket.vue")
    }
  ]
}) 

