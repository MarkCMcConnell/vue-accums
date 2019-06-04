import Vue from 'vue'
import Vuex from 'vuex'
// Import mock data
import memberData from '../../data/SampleElig.js'
import claims from '../../data/SampleClaims.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberData: memberData,
    claims: claims,
    currentView: 'Home'
  },
  mutations: {
    CHANGE_VIEW (state, payload) {
      state.currentView = payload
    }
  },
  actions: {
    CHANGE_VIEW ({ commit }, payload) {
      commit('changeView', payload)
    }
  },
  getters: {

  }
})
