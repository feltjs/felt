<script lang="ts">
	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';
	import Intro from '$routes/Intro.svelte';

	import {project} from '$lib/project';
	import LearnAboutFelt from '$routes/LearnAboutFelt.svelte';
	import Repos from '$routes/Repos.svelte';
</script>

<section>
	<Header>
		<h1>{project.summary}</h1>
	</Header>
</section>
<section>
	<Intro />
</section>
<section>
	<LearnAboutFelt />
</section>
<section>
	<Repos />
</section>
<section>
	<div class="footer-wrapper">
		<Footer>💚</Footer>
	</div>
</section>

<style>
	section {
		margin-bottom: 40px;
		max-width: 700px;
	}
	h1 {
		font-size: var(--font_size_xl);
	}
</style>
