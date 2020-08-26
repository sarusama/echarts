<template>
	<div
	    id="chart"></div>
</template>

<script type="text/javascript">
	export default {
		name: "Bar",
		data: function () {
			return {};
		},
		props: {
			name: {
				type: String,
				default: "我的技能点"
			},
			unit: {
				type: String,
				default: "技能点"
			},
			x: {
				type: Array,
				default: function () {
					return [];
				}
			},
			value: {
				type: Array,
				default: function () {
					return [];
				}
			},
			max: {
				type: Number,
				default: 5
			},
			min: {
				type: Number,
				default: 0
			}
		},
		methods: {
			drawChart: function () {
				let chart = this.$echarts.init(document.getElementById("chart"));
				let option = {
					title: {
						text: this.name
					},
					tooltop: {},
					legend: {
						data: [
							this.unit
						]
					},
					xAxis: {
						type: "category",
						data: this.x
					},
					yAxis: {
						type: "value",
						max: this.max,
						min: this.min
					},
					series: [{
						name: this.unit,
						type: "bar",
						data: this.value
					}]
				};

				chart.setOption(option);
			}
		},
		mounted: function () {
			this.drawChart();
		},
		watch: {
			value: function () {
				this.drawChart();
			}
		}
	}
</script>

<style type="text/css" scoped>
@import url("./index.css");
</style>
