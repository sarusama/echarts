import Vue from "vue";
import Router from "vue-router";
import {
	Index,
	Resume,
	Experience,
	Combine
} from "@/pages";

Vue.use(Router);

const router = new Router({
	routes: [{
		path: "/",
		name: "index",
		component: Index
	}, {
		path: "/resume",
		name: "resume",
		component: Resume
	}, {
		path: "/experience",
		name: "experience",
		component: Experience
	}, {
		path: "/combine",
		name: "combine",
		component: Combine
	}]
});

export default router;
