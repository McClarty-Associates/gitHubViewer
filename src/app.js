import Vue from 'vue'
import moment from 'vue-moment'
import AppLayout from './theme/Layout.vue'
import router from './router'
import apolloProvider from './Apollo.js'

Vue.use(moment)

const app = new Vue({
  router,
  apolloProvider,
  ...AppLayout
})

export { app, apolloProvider, router, moment }
