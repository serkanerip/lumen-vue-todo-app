import Vue from "vue";
import "./main.css";
import "@/assets/css/tailwind.css";
import "./plugins";

import { store, router } from "./app/app";
import App from "@/app/app.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
