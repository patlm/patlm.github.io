<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
</script>

<ExperienceCard
	title="University of Nebraska-Lincoln"
	subtitle="B.Sc. Software Engineering"
	dateTag="Aug 2018 - May 2022"
	titleIcon="/nebraska-icon.jpg"
>
	<ul>
		<li>
			Minors in Business and Mathematics | Highest Distinction | 3.97 GPA
		</li>
		<li>
			Honors: <a href="https://raikes.unl.edu/" target="_blank">Raikes School</a>,
			<a href="https://honors.unl.edu/" target="_blank">Honors Program</a>, Regent's Scholar, and Dean's List (2018-22 academic years)
		</li>
		<li>
			Activities: Raikes School Student Advisory Board (2021-22), <a href="https://honorsambassadors.unl.edu/" target="_blank">Honors Ambassadors</a> (2020-22), CornHacks Planning Committee (2021-22), Robotics Club (2018-19)
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
