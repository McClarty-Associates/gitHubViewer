import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'
import apolloProvider from './Apollo.js'

const app = new Vue({
  router,
  apolloProvider,
  ...AppLayout
})

export { app, apolloProvider, router }
