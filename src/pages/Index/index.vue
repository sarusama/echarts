<template>
	<div
	    class="echarts-index">
		<div
		    v-on:click="item.callback"
		    v-for="item in list"
		    v-bind:key="item.name"
		    class="echarts-button">
		    <div
		        class="echarts-button-main"></div>
	    	<div
	    	    class="echarts-button-text">{{item.name}}</div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: "Index",
		data: function () {
			return {
				list: [{
						name: "简历",
						callback: () => {
							this.$router.push({
								path: "/resume"
							});
						}
					}, {
						name: "项目经验",
						callback: () => {
							this.$router.push({
								path: "/experience"
							});
						}
					}, {
						name: "表格与图表",
						callback: () => {
							this.$router.push({
								path: "/combine"
							});
						}
					}]
				};
		}
	}
</script>

<style scoped>
@import url("./index.css");
</style>
