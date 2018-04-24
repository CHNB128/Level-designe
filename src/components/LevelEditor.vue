<template lang="html">
  <canvas id="canas" height="300" width="1300"></canvas>
</template>

<script>
import paper from 'paper'

export default {
  data () {
    return {
      tool: null,
      levelMap: null,
      selectedPoint: null
    }
  },
  mounted () {
    this.$store.dispatch('renderLevel')
    paper.setup(document.getElementById('canvas'))
    this.tool = new paper.Tool()
    this.tool.onMouseDown = ({ point }) => {
      this.$store.commit('setSelectedPoint', point)
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
