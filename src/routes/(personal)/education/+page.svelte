<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
</script>

<ExperienceCard
	title="University of Nebraska-Lincoln"
	subtitle="B.Sc. Software Engineering | GPA 3.97"
	dateTag="Aug 2018 - May 2022"
	titleIcon="/nebraska-icon.jpg"
>
	<ul>
		<li>Minors in Business and Mathematics</li>
		<li>
			Member of <a href="https://raikes.unl.edu/" target="_blank">Raikes School</a>,
			<a href="https://honors.unl.edu/" target="_blank">Honors Program</a>, and Regent's Scholar
		</li>
		<li>
			Active in <a href="https://honorsambassadors.unl.edu/" target="_blank">Honors Ambassadors</a> and
			Raikes School Student Advisory Board
		</li>
		<li>Dean's list 2018-19, 2019-20, 2020-21, and 2021-22 academic semesters</li>
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
