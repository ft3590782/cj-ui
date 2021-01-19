import Avatar from './avatar'
import Button from './button'
import ButtonGroup from './button-group'
import DivEditor from './div-editor'

const components = {
  Avatar,
  Button,
  ButtonGroup,
  DivEditor
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  install
}
