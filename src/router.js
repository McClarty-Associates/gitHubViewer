/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Category = () => import('./theme/Category.vue')
const Login = () => import('./components/Login.vue')
const NotFound = () => import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [
    {path: '/login', component: Login},
    {path: '/category/:id', name: 'category', component: Category},
    {path: '/', redirect: '/category/front-end'},
    {path: '*', component: NotFound}
  ]
})

export default router
