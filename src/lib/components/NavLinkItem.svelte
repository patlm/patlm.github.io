<script lang="ts">
	import { page } from '$app/stores';

	export let linkUrl: string;
	export let name: string;
</script>

<li class:selected={$page.url.pathname === linkUrl}>
	<a href={linkUrl}>{name}</a>
</li>

<style>
	li {
		width: 100%;
	}
	li a {
		color: white;
		padding: 8px 0px;
		text-decoration: none;
		font-size: 24px;
		width: 100%;
		display: inline-block;
	}
	.selected {
		color: blue;
		background-color: #5fade5;
	}
</style>
