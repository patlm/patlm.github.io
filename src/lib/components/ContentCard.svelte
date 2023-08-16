<script lang="ts">
	export let title: string;
</script>

<div class="outer-card">
	<div class="card">
		<h1>{title}</h1>
		<slot />
	</div>
</div>

<style>
	h1 {
		margin-bottom: 16px;
	}
	.card {
		padding: 16px;
		margin: auto;
		min-height: 150px;
		max-width: 600px;
		background-color: #fefefe;
		box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.1);
	}
	.outer-card {
		padding: 12px 16px;
	}
</style>
