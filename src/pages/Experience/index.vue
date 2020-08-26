<template>
	<div>
		<Table
		    v-for="item in experience"
		    v-bind:key="item.name"
		    v-bind:title="item.name">
			<div
			    class="experience-table-item">
				<div
				    class="item-key">主要职责</div>
				<div
				    class="item-value">{{item.job}}</div>
			</div>
			<div
			    class="experience-table-item">
				<div
				    class="item-key">涉及技术</div>
				<div
				    class="item-value">{{item.skill}}</div>
			</div>
		</Table>
	</div>
</template>

<script type="text/javascript">
	import Table from "@/components/Table";

	export default {
		name: "Experience",
		components: {
			Table
		},
		data: function () {
			return {
				experience: [{
					name: "可视化建站",
					"skill": "React,Ant.Design,Redux",
					job: "抽奖组件开发，对接后端，使用git进行版本控制与协同开发"
				}, {
					name: "吃货属性小鉴定",
					"skill": "React,Redux",
					job: "还原设计稿，对接后端，用git进行版本控制"
				}, {
					name: "会员日小游戏",
					"skill": "HTML5,CSS3,JS,JQuery",
					job: "修改小游戏源码，还原设计稿，对接后端，使用git进行版本控制"
				}, {
					name: "拍和软件",
					"skill": "Vue,Vuex,Vue-Router",
					job: "还原设计稿，使用git进行版本控制与协同开发"
				}, {
					name: "诚货分销中心小程序",
					"skill": "微信小程序",
					job: "完成前端开发，使用svn进行版本控制"
				}]
			};
		}
	}
</script>

<style type="text/css" scoped>
	@import url("./index.css");
</style>
