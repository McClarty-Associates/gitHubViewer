import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

const app = new Vue({
  data: {
    hello: 'Hi There5'
  },
  template: '<div id="app">{{ hello }}</div>'
})
export { app }
