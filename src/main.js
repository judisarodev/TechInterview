import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './styles/_variables.scss';

// Suppress the production tip message
Vue.config.productionTip = false;

// Vue instance
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
