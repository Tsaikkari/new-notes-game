import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  state: {
    users: [],
    user: {}
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data
    },
    SET_USER(state, data) {
      state.user = data
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const result = await axios.get('http://localhost:3005/user/all/json')
      commit('SET_USERS', result.data)
    },
    async fetchUser({ commit }, id) {
      const result = await axios.get(`http://localhost:3000/user/${id}/json`)
      commit('SET_USER', result.data)
    }
    /*async addUser({ commit }) {
      const user = await axios.post('/user', { name: '' })
      // set up the value inside of the store
      commit('SET_USER', user.data)
    },*/
  },
  modules: {
  }
})
