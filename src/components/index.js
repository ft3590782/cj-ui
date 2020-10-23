import Avatar from './avatar'
import Button from './button'
import ButtonGroup from './button-group'

const components = {
  Avatar,
  Button,
  ButtonGroup
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  install
}
