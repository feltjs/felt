<script lang="ts">
	import {stripEnd} from '@feltjs/util/string.js';
	import {base} from '$app/paths';

	import {project} from '$lib/project';
</script>

<main class="markup column">
	<section>
		<header class="centered-hz">
			<img src="{base}/favicon.png" alt="green felt textured heart with the word 'felt' cut out" />
			<h1><a href="https://github.com/feltjs">felt</a></h1>
		</header>
	</section>
	<section>
		<table>
			<tbody
				>{#each project.repos as repo}<tr
						><td>{repo.name}</td><td>{repo.summary}</td><td
							><a href={repo.url}>{stripEnd(repo.url.substring(8), '/')}</a></td
						><td><a href={repo.source}>src</a></td></tr
					>{/each}</tbody
			>
		</table>
	</section>
	<section class="centered">
		<h3 style="width: 100%">values:</h3>
		<ul>
			{#each project.values as value}<li>{value}</li>{/each}
		</ul>
	</section>
	<section class="centered">
		<p><a href="https://github.com/feltjs/felt">source code</a></p>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
	table {
		font-size: var(--font_size_lg);
	}
	tr {
		background-color: var(--tint_dark_0);
	}
	tr:nth-child(2n) {
		background-color: var(--tint_dark_1);
	}
	tr:hover {
		background-color: var(--tint_light_0);
	}
	td {
		padding: var(--spacing_xs) var(--spacing_md);
	}
	td:first-child {
		white-space: nowrap;
	}
</style>
