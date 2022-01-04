import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/assets/css/global.css";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast , {
  position: 'top-right'
});
import store from "./store/index";
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
