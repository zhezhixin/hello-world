import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    userInfo:{phone: 111}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state){
      state.count--
    },
    increment_2 (state,val){
      state.count += val
    },
    decrement_2 (state,val) {
      state.count -= val
    }
  },
  actions: {
    increment(context,val) {
      //context 官方给出的指定对象, 此处context可以理解为store对象
      context.commit('increment_2',val)
    },
    decrement (context,val) {
      context.commit('decrement_2',val)
    }
  },
  modules: {
  }
})
