<template>
  <div id="app">
    <modal/>
    <div id="app-main-view">
      <div id="app-left-bar">
        <field-editor :model="this.$store.getters.settings"/>
        <field-editor :model="this.$store.getters.object"/>
      </div>
      <div id="app-workspace">
        <tool-bar/>
        <div id="app-main-view-level-editor">
          <level-editor id="canvas"/>
        </div>
      </div>
      <layer-editor/>
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
  html, body, #app, #canvas, #app-main-view {
    height: 100%;
    width: 100%;
  }
  #canvas {
    width: 100%;
  }
  #app-main-view {
    display: grid;
    grid-template-columns: 20% auto 18%;
    #app-left-bar {
      display: flex;
      flex-direction: column;
      border-right: 1px solid;
      & > div {
        flex-grow: 1;
        border-bottom: 1px solid;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    #app-workspace {
      display: grid;
      grid-template-rows: min-content auto;
      #app-workspace-resources {
        border-top: 1px solid;
      }
    }
  }
</style>
