<template>
	<div
	    class="table">
        <div
            class="table-head">{{title}}</div>
        <div>
	        <slot></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		name: "Table",
		data: function () {
			return {};
		},
		props: {
			title: {
				type: String,
				default: "title"
			}
		}
	}
</script>

<style type="text/css" scoped>
	@import url("./index.css");
</style>
