<template lang="html">
  <div id="field-editor">
    <div class="field"
      v-if="model"
      v-for="(field, fieldIndex) in model"
      :key="fieldIndex">
      <div class="label">
        <label>{{ fieldIndex }}</label>
      </div>
      <div class="input">
        <div v-if="typeof field == 'object'">
          <select
            class="form-control"
            @change="onValueChange">
            <option 
              v-for="(item, itemIndex) in field.able"
              :key="itemIndex"
              :value="itemIndex"
              placeholder=""
              :selected="field.value == itemIndex">{{ itemIndex }}</option>
          </select>
        </div>
        <input
          v-else
          class="form-control"
          :value="field"
          @change="onValueChange($event, fieldIndex)">
      </div>
    </div>
    <div v-else>
      no data
    </div>
  </div>
</template>

<script>
export default {
  props: ['model'],
  methods: {
    onValueChange (event, key) {
      console.log(this.model)
      console.log(event.target.value)
      this.model[key] = event.target.value
      console.log(this.model)
    }
  }
}
</script>

<style lang="scss">
  #field-editor {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    .field {
      display: grid;
      grid-template-columns: 50% 50%;
      .label {
        display: flex;
        justify-content: center;
      }
      .input {
      
      }
    }
  }
</style>
