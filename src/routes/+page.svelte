<script lang="ts">
	import {stripEnd, stripStart} from '@feltjs/util/string.js';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Intro from '$lib/Intro.svelte';

	import {project} from '$lib/project';
	import LearnAboutFelt from '$lib/LearnAboutFelt.svelte';
	import Repos from '$lib/Repos.svelte';
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
