<script>
	export let value = null;
</script>

<style>
	.square {
		background: #fff;
		border: 1px solid #999;
		float: left;
		font-size: 24px;
		font-weight: bold;
		line-height: 34px;
		height: 34px;
		margin-right: -1px;
		margin-top: -1px;
		margin-bottom: 0;
		padding: 0;
		text-align: center;
		width: 34px;
	}

	.square:focus {
		outline: none;
	}
</style>

<button class="square">
	{ value }
</button>