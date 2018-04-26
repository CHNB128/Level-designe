<template lang="html">
  <canvas resize id="canas" height="300" width="1300"></canvas>
</template>

<script>
import paper from 'paper'

export default {
  data () {
    return {
      levelMap: null,
      selectedPoint: null
    }
  },
  created () {
    paper.install(window)
  },
  mounted () {
    let tool = new paper.Tool()
    this.$store.commit('initProject')
    tool.onMouseDown = ({ point, item }) => {
      project.activeLayer.selected = false
      if (item) {
        item.selected = true
        this.$store.commit('setSelectedItem', item)
      }
    }
    tool.onMouseDrag = (event) => {
      project.activeLayer.translate(event.delta)
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
