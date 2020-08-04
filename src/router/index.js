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
    }
  ]
}) 

