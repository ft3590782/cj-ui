import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import CJUI from './components/index'
import
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(CJUI)

let router = new VueRouter({ routes })



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
