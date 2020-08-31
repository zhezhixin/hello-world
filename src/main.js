import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Dialog} from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
