import Vue from 'vue'
import Vuex from 'vuex'
import paper from 'paper'

import modal from './modal'

paper.setup(document.getElementById('canvas'))

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {
      blockSize: 40,
      blockColor: '#ddd'
    },
    levelData: null,
    selectedPoint: null,
    selectedObject: null,
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
    },
    settings: state => {
      return state.settings
    }
  },
  mutations: {
    setLevelMap (state, map) {
      state.levelData = map
    },
    setSelectedPoint (state, point) {
      let size = state.settings.blockSize
      let x = Math.floor(point.x / size)
      let y = Math.floor(point.y / size)
      if (state.selectedPoint != null) {
        state.levelData[state.selectedPoint.x][state.selectedPoint.y]
          .reflection.selected = false
      }
      if (state.levelData != null) {
        state.levelData[x][y].reflection.selected = true
      }
      state.selectedObject = state.levelData[x][y]
      state.selectedPoint = { x, y }
    }
  },
  actions: {
    renderLevel ({ commit, state }) {
      let size = state.settings.blockSize
      let color = state.settings.blockColor
      let height = state.levelData.length
      let width = state.levelData[0].length
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let path = new paper.Path.Rectangle(
            new paper.Point(x * size,y * size),
            new paper.Size(size, size))
          path.strokeColor = color
          state.levelData[x][y].reflection = path
        }
      }
    },
    createLevel ({ commit, dispatch, state }, { height, width }) {
      let size = state.settings.blockSize
      let color = state.settings.blockColor
      let result = []
      for (let x = 0; x < width; x++) {
        result.push([])
        for (let y = 0; y < height; y++) {
          let temp = {}
          let path = new paper.Path.Rectangle(
            new paper.Point(x * size,y * size),
            new paper.Size(size, size))
          path.strokeColor = color
          temp.reflection = path
          result[x].push(temp)
        }
      }
      commit('setLevelMap', result)
    },
    loadLevel ({ commit, state }, levelData) {
      commit('setLevelMap', levelData)
      dispatch('renderLevel')
    },
    saveLevel ({ state }) {
      let height = state.levelData.length
      let width = state.levelData[0].length
      for (let x = 0; x < width; x++) {
        result.push([])
        for (let y = 0; y < height; y++) {
          delete state.levelData[x][y]
        }
      }
    }
  },
  modules: {
    modal
  }
})
