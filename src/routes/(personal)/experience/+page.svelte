<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import techTags from '$lib/data/techTags';
</script>

<ExperienceCard
	title="Box"
	subtitle="Software Engineer"
	dateTag="Aug 2022 - Present"
	titleIcon="/box-icon.png"
	techTags={[
		techTags.git,
		techTags.java,
		techTags.javascript,
		techTags.jenkins,
		techTags.jsonnet,
		techTags.node,
		techTags.php,
		techTags.react,
		techTags.typescript
	]}
>
	<ul>
		<li>Software engineer on the home web product team</li>
		<li>
			Responsible for <a href="https://www.box.com/" target="_blank">Box</a> core web app and the file
			preview experience
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Horizontal Boring & Tunneling"
	subtitle="Application Developer"
	dateTag="May 2018 - Aug 2022"
	titleIcon="/hbt-icon.png"
	techTags={[techTags.android, techTags.git, techTags.kotlin]}
>
	<ul>
		<li>Created and maintain internal company Android application used by over 80 employees</li>
		<li>Summer 2018 and part-time during school</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Hudl | Design Studio"
	subtitle="Development Manager"
	dateTag="Aug 2021 - May 2022"
	titleIcon="/hudl-icon.png"
	techTags={[techTags.git, techTags.javascript, techTags.reactnative, techTags.typescript]}
>
	<ul>
		<li>
			Worked as a team of 5 to design and create a MVP for a new video recording-centric mobile app
		</li>
		<li>
			Led development of the React Native application by configuring automated formatting, linting,
			and pipelines for the development environment; unblocking other developers; and collaborating
			with team PM to define blocks of work
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Box"
	subtitle="Software Engineer Intern"
	dateTag="May 2021 - Aug 2021"
	titleIcon="/box-icon.png"
	techTags={[techTags.git, techTags.graphql, techTags.javascript]}
>
	<ul>
		<li>
			Designed and implemented a GraphQL domain for Box’s notification center service to sit between
			the existing REST API and its clients using technology based on Apollo Server and Hapi in
			JavaScript
		</li>
		<li>
			Collaborated with engineers to determine best-practice patterns for Box’s GraphQL initiative
			as it is expanded
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="UNL"
	subtitle="Undergradudate Teaching Assistant"
	dateTag="Aug 2020 - May 2021"
	titleIcon="/nebraska-icon.jpg"
	techTags={[techTags.git, techTags.java, techTags.studentchoice]}
>
	<ul>
		<li>
			Fall 2020: Graded, provided feedback, and hosted office hours to assist ~40 students in
			introductory CS course
		</li>
		<li>
			Spring 2021: Graded, designed labs, and mentored teams for a team project-based software
			engineering course
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Nelnet"
	subtitle="Software Engineer Intern"
	dateTag="May 2020 - Jan 2021"
	titleIcon="/nelnet-icon.png"
	techTags={[
		techTags.dotnet,
		techTags.angular,
		techTags.csharp,
		techTags.git,
		techTags.javascript,
		techTags.typescript
	]}
>
	<ul>
		<li>Developer on a <a href="https://factsmgt.com/" target="_blank">FACTS</a> product team</li>
		<li>
			Completed feature-driven and client-requested changes to C# .NET Web API and Angular front-end
		</li>
		<li>
			Increased test coverage by approximately 15% for Angular based front-end services and
			components
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="CSG"
	subtitle="Software Development Intern"
	dateTag="Jun 2019 - Aug 2019"
	titleIcon="/csg-icon.png"
	techTags={[techTags.git, techTags.ruby, techTags.rundeck]}
>
	<ul>
		<li>Migrated automated jobs to Ruby version-controlled code representing Rundeck jobs</li>
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
