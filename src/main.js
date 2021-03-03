import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
import axios from 'axios';

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://54.237.240.244/api/'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
