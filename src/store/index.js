import Vue from 'vue'
import Vuex from 'vuex'

// Import store modules
import modal from './modules/modal'
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
  modules: {
    modal
  }
})
