<template>
  <div id="layer-editor">
    <div id="tool-bar">
      <button class="btn btn btn-outline-secondary">+</button>
      <button class="btn btn btn-outline-secondary">-</button>
    </div>
    <div>
      <div v-for="(item, index) in layers">
        {{ item + ' ' + index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(project)
  },
  computed: {
    layers () {
      return project
    }
  }
}
</script>

<style lang="scss">
  #layer-editor {
    min-width: 18em;
    border-left: 1px solid;
  }
</style>
