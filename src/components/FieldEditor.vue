<template lang="html">
  <div id="field-editor">
    <div class="form-group"
      v-if="model"
      v-for="(field, index) in model"
      :key="index">
      <label>{{ index }}</label>
      <input class="form-control" :value="field">
    </div>
    <div v-else>
      no data
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style lang="scss">
  #field-editor {
    min-height: 100px;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: center;
    .form-group {
      padding: 0 1em;
      width: 100%;
    }
  }
</style>
