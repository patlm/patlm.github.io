<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import techTags from '$lib/data/techTags';
</script>

<ExperienceCard
	title="Personal Website"
	subtitle=""
	dateTag="Jul 2023 - Present"
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
	title="Cashister"
	subtitle=""
	dateTag="Jan 2017 - Present"
	titleIcon="/cashister-icon.png"
	techTags={[techTags.storyboard, techTags.swift, techTags.xcode]}
>
	<ul>
		<li>In 2017, I designed and created an iPad app for the concession stand at my high school</li>
		<li>
			The app allows someone to add items and prices to a board of options, then, when customers
			come, they can enter what is ordered and make change for the order
		</li>
		<li>In 2019, I re-designed with an updated user experience and color scheme</li>
		<li>In 2023, I released an iPhone version of the app</li>
		<li>
			Available on the <a
				href="https://apps.apple.com/us/app/cashister/id1272464133"
				target="_blank">iOS App Store</a
			>
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Plate Game"
	subtitle=""
	dateTag="Aug 2022 - Present"
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
			Based on the game of seeing how many different state license plates you see on a road trip
		</li>
		<li>Created as a fun companion for road trips to help pass the time with friends/family</li>
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
				>purpose game</a
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
		<li>Created as part of CornHacks 2021 where it placed 2nd out of 21 team</li>
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
		<li>Created as part of CornHacks 2021 where it placed 3rd out of 20 team</li>
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
