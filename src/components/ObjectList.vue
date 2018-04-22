<template lang="html">
  <div id="object-list">
    <div class="list-group"
      v-if="objects"
      v-for="(item, index) in objects"
      :key="index">
      <button class="list-group-item list-group-item-action">
        {{ item.type + ' ' + index  }}
      </button>
    </div>
    <div v-else>
      no data
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    objects () {
      return this.$store.getters.level.objects
    }
  }
}
</script>

<style lang="scss">
  #object-list {
    display: flex;
    align-items: flex-start;
    & > div {
      flex-grow: 1;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .list-group {
      width: 100%;
    }
  }
</style>
