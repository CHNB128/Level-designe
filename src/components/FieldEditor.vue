<template lang="html">
  <div id="field-editor">
    <div class="field"
      v-if="model"
      v-for="(field, index) in model"
      :key="index">
      <div class="">
        <label>{{ index }}</label>
      </div>
      <div class="">
        <input :value="field">
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
    height: 100px;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: center;
    .field {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .label {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
