<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import techTags from '$lib/data/techTags';
</script>

<ExperienceCard
	title="Lattice"
	subtitle="Software Engineer"
	dateTag="Jun 2025 - Nov 2025"
	titleIcon="/lattice-icon.png"
	techTags={[
		techTags.git,
		techTags.javascript,
		techTags.langgraph,
		techTags.nestjs,
		techTags.node,
		techTags.react,
		techTags.typescript,
	]}
	>
	<ul>
		<li>
			Built RAG-based tool within LangGraph AI assistant (20+ tools) to deliver survey data insights, owning question-level insights while iterating on prompt structures to reduce hallucinations and token costs across two production releases
		</li>
		<li>
			Extended AWS Bedrock integration to support multiple concurrent knowledge bases in TypeScript monorepo, allowing experimentation with different foundational models and chunking/embedding strategies
		</li>
		<li>
			Delivered production features including beta feedback mechanism (React) and document sync safeguards (NestJS), reducing third-party integration failures and enabling data-driven product iteration
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Box"
	subtitle="Software Engineer"
	dateTag="Aug 2022 - Jun 2025"
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
		techTags.springboot,
		techTags.typescript
	]}
>
	<ul>
		<li>
			Developed and maintained front-end features (React) and back-end components (PHP, Java, Node) for the core web app and file preview experience, serving millions of daily active users
		</li>
		<li>
			Shipped full-stack solution enabling compliance for high-value financial services accounts, meeting critical deadline
		</li>
		<li>
			Enhanced front-end observability by expanding instrumentation and leading evaluation of a real user monitoring tool
		</li>
		<li>
			Partnered with product and design to revamp file preview error messaging across all file types, improving UX consistency and reducing support volume
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
		<li>
			Created and maintain internal company Android application that is used by 100+ field employees
		</li>
		<li>
			Automated contact updates and digitalized field workflows improving collaboration and eliminating mail wait time
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="Hudl | Design Studio"
	subtitle="Development Manager"
	dateTag="Aug 2021 - May 2022"
	titleIcon="/hudl-icon.png"
	techTags={[techTags.ffmpeg, techTags.git, techTags.javascript, techTags.reactnative, techTags.typescript]}
>
	<ul>
		<li>
			Led technical development of React Native app enabling athletes to create highlight videos in recruiter-friendly format
		</li>
		<li>
			Configured project setup (e.g. linting, testing, and pipelines), unblocked developers, and prioritized tasks with PM
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
			Engineered GraphQL domain for a notification center service, streamlining queries and enabling future scalability
		</li>
		<li>
			Collaborated with engineers to determine best-practice patterns for Box’s GraphQL initiative as it is expanded
		</li>
	</ul>
</ExperienceCard>

<ExperienceCard
	title="UNL"
	subtitle="Undergraduate Teaching Assistant"
	dateTag="Aug 2020 - May 2021"
	titleIcon="/nebraska-icon.jpg"
	techTags={[techTags.git, techTags.java, techTags.studentchoice]}
>
	<ul>
		<li>
			Fall 2020: Hosted office hours, provided feedback, and graded to support ~40 students in introductory CS course
		</li>
		<li>
			Spring 2021: Mentored 6 teams of ~5, designed labs, and graded for project-based software engineering course
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
			Increased test coverage by approximately 15% for Angular based front-end services and components
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
		<li>Reduced release complexity by migrating legacy automations to Ruby version-controlled Rundeck jobs</li>
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
