import {
    HIDE_MODAL
} from '../mutation-types'

const state = {
    showModal: true
}

const mutations = {
    [HIDE_MODAL](state) {
        state.showModal = !state.showModal
    }
}

export default {
    state,
    mutations
}
