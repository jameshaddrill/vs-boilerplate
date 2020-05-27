import Vue from "vue";
import App from "./App.vue";
import "./styles/styles.scss";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    components: {
        App,
    },
    render(createElement) {
        return createElement(App);
    },
});
