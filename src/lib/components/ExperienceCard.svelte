<script lang="ts">
	import '../styles/tagColors.css';

	export let title: string;
	export let subtitle: string;
	export let dateTag: string;
	export let titleIcon: string | undefined = undefined;
	export let techTags: { name: string; link: string; color: string }[] | undefined = undefined;
</script>

<div class="outer-card">
	<div class="card">
		<div class="alignLeft displayInline">
			<img src={titleIcon} alt="Company or project icon" width="55" height="55" />
			<div class="titleGroup">
				<h2>{title}</h2>
				<h3>{subtitle}</h3>
			</div>
		</div>
		<div class="alignRight">
			<p>{dateTag}</p>
		</div>
		<div class="clearBoth">
			<slot />
		</div>
		{#if techTags}
			<div class="tags">
				<ul>
					{#each techTags as tag}
						<li><a href={tag.link} target="_blank" class={tag.color}>{tag.name}</a></li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>

<style>
	.tags {
		font-size: 85%;
	}
	.tags ul {
		list-style: none;
	}
	.tags ul li {
		display: inline-block;
		margin: 10px 2px;
	}
	.tags ul li a {
		text-decoration: none;
		color: white;
		border: lightgray solid 1px;
		padding: 6px 12px;
		border-radius: 20px;
	}
	.titleGroup h2 {
		font-size: 150%;
	}
	.titleGroup h3 {
		font-size: 120%;
		font-weight: normal;
		margin-bottom: 16px;
	}
	img {
		margin-right: 16px;
		margin-bottom: 16px;
		border-radius: 10px;
	}
	.displayInline {
		display: inline-flex;
	}
	.alignLeft {
		float: left;
	}
	.alignRight {
		float: right;
	}
	.clearBoth {
		clear: both;
		margin-bottom: 28px;
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

	@media only screen and (max-width: 900px) {
		.alignRight {
			float: none;
			clear: both;
		}
	}
</style>
