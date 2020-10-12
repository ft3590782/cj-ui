import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CJUI from './components/index'
Vue.config.productionTip = false

Vue.use(CJUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
