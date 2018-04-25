<template>
  <div class="d-flex flex-column align-items-center">
    <div id="upload-file" class="">
      <label class="form-control" for="file">Browse level file...</label>
      <input type="file" id="file"
        @change="onFileSelected">
    </div>
    <p>or</p>
    <div class="form-group">
      <div class="d-flex">
        <input
          class="form-control"
          type="text"
          v-model="height">
        <input
          class="form-control"
          type="text"
          v-model="width">
      </div>
      <button
        class="btn btn-outline-secondary form-control mt-3"
        @click="onSubmit"
        type="button">Create new map</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: null,
      height: null,
    }
  },
  methods: {
    onSubmit () {
      if (this.width != null && this.height != null) {
        this.$store.dispatch('createLevel', {
          height: this.height,
          width: this.width
        })
        this.$store.commit('hideModal')
      }
    },
    onFileSelected (event) {
      this.$store.commit('hideModal')
    }
  }
}
</script>

<style lang="scss">
  #upload-file {
    label {
      cursor: pointer;
    }
    input {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }
  }
</style>
