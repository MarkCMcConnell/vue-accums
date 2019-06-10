const state = {
    showModal: true
}

const actions = {
    HIDE_MODAL ({ commit }, payload) {
        commit('showModal', payload)
    }
}

const mutations = {
    HIDE_MODAL (state, payload) {
        state.showModal = !state.showModal
    }
}

export default {
    namespace: true,
    state,
    actions,
    mutations
}