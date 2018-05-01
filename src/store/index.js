import Vue from 'vue'
import Vuex from 'vuex'

import modal from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {
      blockSize: 40,
      blockColor: '#ddd',
      blockBorderColor: '#555'
    },
    resources: null,
    selectedObject: null,
    minionList: {
      player: {
        sprite: null
      }
    },
    spriteList: [],
  },
  getters: {
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
    initProject (state) {
      paper.setup(document.getElementById('canvas'))
    },
    setSelectedItem (state, item) {
      state.selectedObject = item.payload
    }
  },
  actions: {
    createLevel ({ commit, dispatch, state }, { height, width }) {
      let size = state.settings.blockSize
      let mainColor = state.settings.blockColor
      let borderColor = state.settings.blockBorderColor
      project.clear()
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let path = new Path.Rectangle(
            new paper.Point(x * size,y * size),
            new paper.Size(size, size))
          path.fillColor = mainColor
          path.strokeColor = borderColor
          path.meta = {
            x: x,
            y: y,
          }
          path.payload = {
            sprite: {
              value: null,
              able: state.spriteList
            },
            spawnPoint: {
              value: null,
              able: state.minionList
            }
          }
        }
      }
    },
    loadLevel ({ commit, state }, levelData) {
      commit('setLevelMap', levelData)
      dispatch('renderLevel')
    },
    saveLevel ({ state }) {
      let result = {
        resources: state.spriteList,
        minions: state.minionList,
        units: []
      }
      result.resources = state.resources
      for (let i = 0; i < project.activeLayer.children.length; i++) {
        let currentItem = project.activeLayer.children[i]
        result.units.push(currentItem.payload)
      }
      console.log(result)
    }
  },
  modules: {
    modal
  }
})
