<template lang="html">
  <canvas id="canas" height="600" width="1300"></canvas>
</template>

<script>
import paper from 'paper'

export default {
  data () {
    return {
      tool: null
    }
  },
  mounted () {
    paper.setup(document.getElementById('canvas'))
    this.tool = new paper.Tool()
    this.tool.onMouseDown = function(event) {
      console.log(event.point)
        var path = new paper.Path.Circle({
            center: event.point,
            radius: 5,
            fillColor: 'black'
        });
    }
  }
}
</script>

<style lang="css">
</style>
