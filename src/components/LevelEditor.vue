<template lang="html">
  <canvas resize id="canas" height="300" width="1300"></canvas>
</template>

<script>
export default {
  data () {
    return {
      levelMap: null,
      selectedPoint: null
    }
  },
  mounted () {
    let tool = new Tool()
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
