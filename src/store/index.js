import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    levelData: {
      objects: [
        {
          type: "block",
          color: "red",
        }
      ],
      settings: {
        scale: "20"
      }
    },
    selectedObject: {
      name: "astrid",
      color: "red"
    },
  },
  getters: {
    level: state => {
      return state.levelData != null
        ? state.levelData
        : false
    },
    object: state => {
      return state.selectedObject != null
        ? state.selectedObject
        : false
    }
  },
  actions: {
    render ({ commit, state }) {

    }
  }
})
