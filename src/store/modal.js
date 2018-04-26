const state = {
  type: null
}

const mutations = {
  showModal (state, type) {
    state.type = type
    $('#modal').modal('show')
  },
  hideModal () {
    $('#modal').modal('hide')
  }
}

export default {
  state,
  mutations
}
