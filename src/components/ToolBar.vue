<template lang="html">
  <div id="tool-bar">
    <button
      class="btn btn-outline-secondary"
      @click="$store.commit('showModal')">
      load level
    </button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  #tool-bar {
    border-bottom: 1px solid;
    padding: 0.25em;
  }
</style>
