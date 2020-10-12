import Avatar from './avatar'

const components = {
  Avatar
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}


export default {
  install
}