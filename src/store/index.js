import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    inceremnet (state) {
      state.count++
    },
    decremnet (state){
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
