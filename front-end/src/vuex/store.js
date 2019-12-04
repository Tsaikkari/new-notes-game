import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mutations from './mutations'

// Load Vuex
Vue.use(Vuex)

/*const state = {
  sound: soundInitState,
  next: nextInitState,
  startPoints: startPointsInitState,
  drop: dropInitState
}*/

// Create store
export default new Vuex.Store({
  /*state,*/
  mutations,
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      // set up the value inside of the store
      commit('SET_COUNTER', newCount)
    }
  },
  async fetchUsers({ commit }) {
    const result = await axios.get('http://localhost:3000/user/all/json')
    commit('SET_USERS', result.data)
  },
  modules: {
  }
})
