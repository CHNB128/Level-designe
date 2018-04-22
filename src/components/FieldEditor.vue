<template lang="html">
  <div id="field-editor">
    <div v-if="model">
      <div class="form-group" v-for="(field, index) in model"
        :key="index">
        <label>{{ index }}</label>
        <input class="form-control" :value="field">
      </div>
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
    align-items: flex-start;
    display: flex;
    & > div {
      flex-grow: 1;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .form-group {
      padding: 0 1em;
      width: 100%;
    }
  }
</style>
