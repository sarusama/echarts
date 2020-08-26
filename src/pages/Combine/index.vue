<template>
	<div
	    class="combine">
	    <div
	        class="combine-chart">
		    <Bar
		        v-bind:x="x"
		        v-bind:value="value"
		        />
        </div>
        <div
            class="combine-table">
            <Table
                v-for="(item, index) in x"
                v-bind:key="item"
                v-bind:title="item">
            	{{value[index]}}
            </Table>
        </div>
    </div>
</template>

<script type="text/javascript">
	import Table from "@/components/Table";
	import Bar from "@/components/Bar";

	export default {
		name: "Combine",
		data: function () {
			return {
				value: ["2", "1", "3"],
				x: ["Vue", "React", "GIT"]
			};
		},
		components: {
			Table,
			Bar
		},
		methods: {
			updateData: function () {
				let value = [];
				this.value.forEach(() => {
					value.push(`${Math.round(5 * Math.random())}`);
				});
				this.value = value;
			},
			countDown: function () {
				return new Promise((resolve, reject) => {
					let timeout = setTimeout(() => {
						clearTimeout(timeout);
						resolve();
					}, 10 * 1000);
				});
			},
			countDownToUpdateData: function () {
				this.countDown().then(() => {
					this.updateData();
					this.countDownToUpdateData();
				});
			}
		},
		mounted: function () {
			this.countDownToUpdateData();
		}
	}
</script>

<style type="text/css" scoped>
	@import url("./index.css");
</style>
