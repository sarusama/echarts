<template>
	<div
	    id="root">
	    <div
	        class="echarts-tabs"
	        v-show="showTabs">
		    <div
		        v-for="tab in tabs"
		        v-bind:key="tab.name"
		        v-bind:class="[
			        'echarts-tab',
			        $route.path == tab.path ? 'active' : ''
		        ]"
		        v-on:click="tab.callback">
	        	{{tab.name}}
	        </div>
        </div>
		<router-view
		    class="main"></router-view>
	</div>
</template>

<script>
	export default {
		name: "App",
		data: function () {
			return {
				tabs: [
				    {
				    	name: "简历",
				    	path: "/resume",
				    	callback: () => {
							this.$router.push({
								path: "/resume"
							});
						}
				    },
				    {
				    	name: "项目经验",
				    	path: "/experience",
				    	callback: () => {
							this.$router.push({
								path: "/experience"
							});
				    	}
				    },
				    {
				    	name: "表格与图表",
				    	path: "/combine",
				    	callback: () => {
							this.$router.push({
								path: "/combine"
							});
				    	}
				    }
				]
			};
		},
		computed: {
			showTabs: function () {
				return this.$route.path != "/";
			}
		}
	}
</script>

<style scoped>
	@import url("./index.css");
</style>
