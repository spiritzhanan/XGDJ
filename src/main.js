import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/global.css";
import axios from "axios";
import qs from "qs";

Vue.config.productionTip = false;

Vue.prototype.$qs = qs;
axios.defaults.baseURL = "http://123.56.84.99:8083";
axios.interceptors.request.use(config => {
  config.headers.token = window.sessionStorage.getItem("token");
  //必须Return
  return config;
  console.log(config);
});

// 在请求头中加token
// axios.interceptors.request.use(
//   config => {
//     // 判断是否存在token，如果存在的话，则每个http header都加上token
//     let token = window.sessionStorage.getItem("token");
//     // if (!config.headers.hasOwnProperty("Authorization") && token) {
//     //   config.headers.Authorization = token;
//     // }
//     if (token) {
//       config.headers.token = token;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
