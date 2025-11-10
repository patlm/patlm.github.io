<script>
	import ContentCard from '$lib/components/ContentCard.svelte';
</script>

<div>
	<ContentCard title="About Me">
		<p>👋🏻 Hi, my name is Patrick!</p>
		<ul>
			<li>
				I'm a Software Engineer based in Lincoln, NE 🌽 (previously in SF Bay Area)
			</li>
			<li>
				In my free time, I enjoy reading, photography, and being active 📚 📷 🏀 🎾 🏃🏻‍♂️ 🚲 🥾 ⛰️
			</li>
			<li>I also enjoy exploring technology in mobile, web, and ML/AI software development 👨🏻‍💻</li>
		</ul>
	</ContentCard>
</div>

<style>
	ul {
		margin-left: 32px;
		font-size: 105%;
	}
	ul li {
		padding-top: 6px;
	}
</style>
