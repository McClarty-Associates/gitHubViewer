import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('./components/Login.vue')
const User = () => import('./theme/User.vue')
const About = () => import('./theme/About.vue')
const NotFound = () => import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [
    {path: '/login', component: Login},
    {path: '/about', component: About},
    {path: '/user/:id', name: 'user', component: User},
    {path: '/', component: User},
    {path: '*', component: NotFound}
  ]
})

export default router
