<template>
  <div id="app" class="container-fluid">
    <modal/>
    <div class="row">
      <div id="app-left-bar" class="col-2 p-0">
        <field-editor :model="this.$store.getters.settings"/>
        <field-editor :model="this.$store.getters.object"/>
      </div>
      <div id="app-main-view" class="col p-0">
        <tool-bar/>
        <div class="d-flex">
          <div id="app-main-view-level-editor">
            <level-editor id="canvas"/>
          </div>
          <layer-editor/>
        </div>
        <resources id="app-main-view-resources"/>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './components/Modal/index'
import ToolBar from './components/ToolBar'
import ObjectList from './components/ObjectList'
import FieldEditor from './components/FieldEditor'
import LevelEditor from './components/LevelEditor'
import LayerEditor from './components/LayerEditor'
import Resources from './components/Resources'

export default {
  name: 'app',
  components: {
    Modal,
    ToolBar,
    LayerEditor,
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
  #canvas {
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
      }
      #app-main-view-resources {
        flex-grow: 0;
        border-top: 1px solid;
        max-height: 10em;
      }
    }
  }
</style>
