<template>
  <div id="app" class="container-fluid">
    <modal/>
    <div class="row">
      <div id="app-left-bar" class="col-2 p-0">
        <div>
          <buttondata-toggle="modal" data-target="#modal" @click="$store.commit('showModal')">load level</button>
        </div>
        <field-editor :model="this.$store.getters.object"/>
      </div>
      <div id="app-main-view" class="col p-0">
        <div id="app-main-view-level-editor">
          <level-editor v-if="$store.getters.level" id="canvas"/>
            <!-- <field-editor :model="this.$store.getters.level.settings"/> --> 
        </div>
        <resources id="app-main-view-resources"/>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './components/Modal/index'
import ObjectList from './components/ObjectList'
import FieldEditor from './components/FieldEditor'
import LevelEditor from './components/LevelEditor'
import Resources from './components/Resources'

export default {
  name: 'app',
  components: {
    Modal,
    ObjectList,
    LevelEditor,
    FieldEditor,
    Resources
  }
}
</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
    width: 100%;
  }
  div.resizable {
    min-height: 30px;
    min-width: 30px;
    resize: vertical;
    overflow: auto;
    max-height: fit-content;
    max-width: fit-content;
  }
  #app {
    display: flex;
    flex-direction: column;
    & > div {
      flex-grow: 1;
    }
    #app-left-bar  {
      border-right: 1px solid;
      display: flex;
      flex-direction: column;
      & > div {
        flex-grow: 1;
        border-bottom: 1px solid;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    #app-right-bar {
      border-left: 1px solid;
    }
    #app-main-view {
      display: flex;
      flex-direction: column;
      #app-main-view-level-editor {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        #field-editor {
          border-left: 1px solid;
        }
      }
      #app-main-view-resources {
        border-top: 1px solid;
        min-height: 15em;
      }
    }
  }
</style>
