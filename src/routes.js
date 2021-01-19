import navConfig from './nav.config'

const load = name => {
  return r =>
    require.ensure([], () =>
      r(require(`./demo/${name.toLowerCase()}/${name.toLowerCase()}.vue`))
    )
}

const registerRoute = navConfig => {
  let routes = []

  const navs = navConfig.navs
  navs.forEach(nav => {
    routes.push({
      name: nav.name,
      path: nav.path,
      title: nav.title,
      component: load(nav.name)
    })
  })
  return routes
}

let router = registerRoute(navConfig)
// console.log(router)
// const router = new VueRouter({
//   routes: [
//     {
//       path: ''
//     },
//     {
//       path: '/demo/avatar',
//       component: () => import('@/demo/avatar/avatar.vue')
//     },
//     {
//       path: '/demo/button',
//       component: () => import('@/demo/button/button.vue')
//     }
//   ]
// })
const defaultRoutes = [
  {
    name: 'index',
    title: '首页',
    path: '/',
    component: () => import('@/demo/index.vue')
  }
]

export default [...defaultRoutes, ...router]
