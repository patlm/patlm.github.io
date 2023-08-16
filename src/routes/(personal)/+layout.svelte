<script lang="ts">
	import NavLinkItem from '$lib/components/NavLinkItem.svelte';
</script>

<svelte:head>
	<title>Patrick Murphy</title>
</svelte:head>

<nav>
	<h1>Patrick <br /> Murphy</h1>
	<img src="/pic.jpg" alt="Profile" width="150" height="150" />
	<ul>
		<NavLinkItem linkUrl="/" name="About" />
		<NavLinkItem linkUrl="/experience" name="Experience" />
		<NavLinkItem linkUrl="/education" name="Education" />
		<NavLinkItem linkUrl="/projects" name="Projects" />
	</ul>
</nav>

<div>
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@600&display=swap');

	h1 {
		font-size: 32px;
		color: #ebf5fc;
		padding-top: 12px;
		font-family: 'Klee One', cursive;
	}
	img {
		margin-top: 16px;
		border-radius: 50%;
	}
	nav {
		text-align: center;
		background-color: #1a679e;
		color: #ebf5fc;
	}
	nav ul {
		margin-top: 12px;
		padding-bottom: 12px;
	}

	@media only screen and (min-width: 700px) {
		h1 {
			font-size: 52px;
		}
		img {
			margin-top: 32px;
			border-radius: 50%;
		}
		nav {
			/* float: left; */
			position: fixed;
			height: 100%;
			width: 280px;
			overflow-y: scroll;
		}
		nav ul {
			margin-top: 32px;
			list-style: none;
			width: 100%;
			margin-bottom: 32px;
		}
		div {
			margin-left: 280px;
			padding-top: 12px;
			margin-bottom: 16px;
		}
	}
</style>
