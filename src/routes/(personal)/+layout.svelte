<script lang="ts">
	import NavLinkItem from '$lib/components/NavLinkItem.svelte';
</script>

<svelte:head>
	<title>Patrick Murphy</title>
</svelte:head>

<nav>
	<h1>Patrick <br /> Murphy</h1>
	<img src="/pic.jpg" alt="Profile" width="150" height="150" />
	<br>
	<div class="profile-links-div">
		<a href="/resume-patrick.pdf" class="profile-link" style="margin-right: 12px;" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-453.33h320V-520H320v66.67Zm0 120h320V-400H320v66.67Zm0 120h200V-280H320v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/></svg>
			<br>
			<p>
				Resume
			</p>
		</a>
		<a href="https://www.linkedin.com/in/patlm" class="profile-link" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M446.67-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h166.67v66.67H280q-55.56 0-94.44 38.84-38.89 38.84-38.89 94.33 0 55.49 38.89 94.49 38.88 39 94.44 39h166.67V-280ZM323.33-446.67v-66.66h313.34v66.66H323.33Zm190 166.67v-66.67H680q55.56 0 94.44-38.84 38.89-38.84 38.89-94.33 0-55.49-38.89-94.49-38.88-39-94.44-39H513.33V-680H680q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H513.33Z"/></svg>
			<br>
			<p>
				LinkedIn
			</p>
		</a>
	</div>
	<ul>
		<NavLinkItem linkUrl="/" name="About" />
		<NavLinkItem linkUrl="/experience" name="Experience" />
		<NavLinkItem linkUrl="/education" name="Education" />
		<NavLinkItem linkUrl="/projects" name="Projects" />
	</ul>
</nav>

<div class="slot-div">
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
	.profile-link {
		color: #ebf5fc;
		border: 1px solid #ebf5fc;
		border-radius: 12px;
		display: inline-block;
		margin: auto;
		text-decoration: none;
		padding: 10px 0px;
		height: 64px;
		width: 64px;
		font-size: 12px;
	}
	.profile-link:hover {
		color: #ebf5fc;
		background-color: #3a91cf;
	}
	.profile-links-div {
		margin-top: 16px;
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
			margin-top: 16px;
			list-style: none;
			width: 100%;
			margin-bottom: 32px;
		}
		.slot-div {
			margin-left: 280px;
			padding-top: 12px;
			margin-bottom: 16px;
		}
	}
</style>
