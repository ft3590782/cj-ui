import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
    },
    {
      path: '/demo/avatar',
      component: () => import('@/demo/avatar/avatar.vue')
    }
  ]
})

export default router
