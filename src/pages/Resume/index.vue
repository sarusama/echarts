<template>
	<div
	    class="resume">
		<div
		    class="info">
		    <div
		        class="info-item">
				<div
				    class="info-item-key">姓名</div>
				<div
				    class="info-item-value">陆迪</div>
			</div>
			<div
			    class="info-item">
				<div
				    class="info-item-key">应聘岗位</div>
				<div
				    class="info-item-value">前端</div>
			</div>
		</div>
		<div
		    class="skills">
		    <Bar
		        v-bind:x="x"
		        v-bind:value="value"
		        />
	    </div>
	</div>
</template>

<script type="text/javascript">
	import Bar from "@/components/Bar";

	export default {
		name: "Resume",
		data: function () {
			return {
				x: ["Vue", "React", "Git"],
				value: [2, 1, 3]
			};
		},
		components: {
			Bar
		}
	}
</script>

<style type="text/css" scoped>
	@import url("./index.css");
</style>
