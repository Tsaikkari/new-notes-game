import Vue from 'vue'
import Vuex from 'vuex'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      // set up the value inside of the store
      commit('SET_COUNTER', newCount)
    }
  },
  modules: {
  }
})
