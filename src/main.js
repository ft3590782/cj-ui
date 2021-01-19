import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import CJUI from './components/index'
// import scss
import 'normalize.css/normalize.css' //初始化css
import './theme/src/index.scss'
import './demo/scss/main.scss'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(CJUI)

let router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
