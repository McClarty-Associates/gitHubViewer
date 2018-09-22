import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import moment from "vue-moment";

Vue.config.productionTip = false;

Vue.use(moment);

new Vue({
  router,
  store,
  moment,
  render: h => h(App)
}).$mount("#app");
