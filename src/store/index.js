import Vue from 'vue'
import Vuex from 'vuex'

import modal from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {
      blockSize: 40
    },
    levelData: null,
    selectedPoint: null,
    selectedObject: null,
    levelMap: null,
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
  mutations: {
    setSelectedPoint (state, point) {
      let x = Math.floor(point.x / this.$store.getters.blockSize)
      let y = Math.floor(point.y / this.$store.getters.blockSize) 
      if (state.selectedPoint != null) {
        state.levelMap[state.selectedPoint.x][state.selectedPoint.y]
          .selected = false
      }
      if (state.levelMap != null) {
        state.levelMap[x][y].selected = true
      }
      state.selectedObject = state.levelMap[x][y]
      state.selectedPoint = { x, y }
    },
    setLevelMap (state, map) {
      state.levelMap = map
    }
  },
  actions: {
    renderLevel ({ commit, state }) {
      let size = state.blockSize
      for (let x = 0; x < state.levelData.length; x++) {
        for (let y = 0; y < state.levelData[0].length; y++) {
          let path = new paper.Path.Rectangle(
            new paper.Point(x * size,y * size), 
            new paper.Size(size, size))
          path.fillColor = 'black'
          state.levelData[x][y].reflection = path
        }
      }
    },
    loadLevel ({ commit, state }, levelData) {
    }
  },
  modules: {
    modal
  }
})
