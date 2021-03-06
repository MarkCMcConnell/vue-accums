import { CHANGE_VIEW } from '../mutation-types'

const state = {
  currentView: 'home'
}

const mutations = {
  [CHANGE_VIEW] (state, view) {
    state.currentView = view
  }
}

export default {
  state,
  mutations
}
