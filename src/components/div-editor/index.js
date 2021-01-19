import CjDivEditor from './src/div-editor.vue'

/* istanbul ignore next */
CjDivEditor.install = function (Vue) {
  Vue.component(CjDivEditor.name, CjDivEditor)
}

export default CjDivEditor
