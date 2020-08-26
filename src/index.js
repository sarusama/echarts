import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

const _Vue = new Vue({
	el: "#root",
	store,
	router,
	template: "<App />",
	components: {
		App
	}
})
