// import Vue from "./assets/js/vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#myApplication",
  template: "<App/>",
  components: { App },
});
