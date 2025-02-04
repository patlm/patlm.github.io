<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import techTags from '$lib/data/techTags';
</script>

<ExperienceCard
	title="Cashister"
	subtitle=""
	dateTag="Jan 2017 - Present"
	titleIcon="/cashister-icon.png"
	techTags={[techTags.storyboard, techTags.swift, techTags.xcode]}
>
	<ul>
		<li>
			Native iOS cash register app designed to increase concessions efficiency with 1,000+ downloads 
		</li>
		<li>2017: Designed and created an iPad app for the concession stand at my high school</li>
		<li>2019: Re-designed with an updated user experience and color scheme</li>
		<li>2023: Released an iPhone version of the app</li>
		<li>
			Available on the <a
				href="https://apps.apple.com/us/app/cashister/id1272464133"
				target="_blank">iOS App Store</a
			>
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Chess Bot"
	subtitle=""
	dateTag="Nov 2024"
	titleIcon="/chess-bot.png"
	techTags={[techTags.python]}
>
	<ul>
		<li>
			Built chess bot using minimax-based algorithm for <a href="https://brainrotcode.com/contests/pinata2024" target="_blank">7-day challenge</a> hosted by <a href="https://brainrotcode.com/" target="_blank">bAInrot</a> and <a href="https://pinata.cloud/" target="_blank">Pinata</a>
		</li>
		<li>
			Placed 7th out of 29 participants
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Personal Website"
	subtitle=""
	dateTag="Jul 2023"
	titleIcon="/website-icon.png"
	techTags={[techTags.javascript, techTags.svelte, techTags.sveltekit, techTags.typescript]}
>
	<ul>
		<li>Learned Svelte while re-creating my personal website</li>
		<li>
			The <a href="https://github.com/patlm/patlm.github.io" target="_blank">code repo</a> is public
			on GitHub
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Plate Game"
	subtitle=""
	dateTag="Aug 2022 - Feb 2023"
	titleIcon="/plate-game-icon.png"
	techTags={[
		techTags.expo,
		techTags.javascript,
		techTags.sqlite,
		techTags.reactnative,
		techTags.typescript
	]}
>
	<ul>
		<li>
			Created as a fun companion for road trips to help pass the time with friends/family
		</li>
		<li>
			Based on the game of seeing how many different state license plates you see on a road trip
		</li>
		<li>
			Available on the <a
				href="https://apps.apple.com/us/app/plate-game/id6443521748"
				target="_blank">iOS App Store</a
			>
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="quick-maps"
	subtitle=""
	dateTag="Dec 2021 - Jan 2022"
	titleIcon="/quick-maps-icon.png"
	techTags={[
		techTags.chakraui,
		techTags.firebase,
		techTags.javascript,
		techTags.nextjs,
		techTags.react,
		techTags.typescript
	]}
>
	<ul>
		<li>Web app for building interactive map games</li>
		<li>
			Created as an alternative to <a href="https://www.purposegames.com/" target="_blank"
				>PurposeGames</a
			> for my dad to use while teaching geography classes
		</li>
		<li>
			A <a href="https://quick-maps.vercel.app/" target="_blank">live version</a> is hosted on
			Vercel and the <a href="https://github.com/patlm/quick-maps" target="_blank">code repo</a> is public
			on GitHub
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Cue"
	subtitle=""
	dateTag="Feb 2021"
	titleIcon="/cue-icon.png"
	techTags={[techTags.firebase, techTags.javascript, techTags.react]}
>
	<ul>
		<li>
			Web app allowing TAs to intuitively manage the queue of students with questions during TA
			office hours
		</li>
		<li>Placed 2nd out of 21 teams at CornHacks 2021</li>
		<li>
			A <a href="https://tada-cue.web.app/" target="_blank">live version</a> is hosted on Firebase
			and the <a href="https://github.com/LukeAVanDrie/Cue">code repo</a> is public on GitHub
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Favor"
	subtitle=""
	dateTag="Feb 2020"
	titleIcon="/favor-icon.png"
	techTags={[techTags.angular, techTags.firebase, techTags.javascript, techTags.typescript]}
>
	<ul>
		<li>
			A way to connect students in the right place at the right time to help their peers in need
		</li>
		<li>Placed 3rd out of 20 teams at CornHacks 2020</li>
		<li>
			A <a href="https://do-favor.web.app/" target="_blank">live version</a> is hosted on Firebase
			and the <a href="https://github.com/JacobSampson/favor">code repo</a> is public on GitHub
		</li>
	</ul>
</ExperienceCard>

<style>
	ul {
		margin-left: 32px;
		font-size: 105%;
	}
	ul li {
		padding-top: 6px;
	}
</style>
