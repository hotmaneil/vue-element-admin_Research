
const state = {
  wsRes: {}
}

const actions = {}

const mutations = {
  setWsRes(state, payload) {
    state.wsRes = payload
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
