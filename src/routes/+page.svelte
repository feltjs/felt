<script lang="ts">
	import {stripEnd} from '@feltjs/util/string.js';
	import {base} from '$app/paths';

	import {project} from '$lib/project';
</script>

<main class="markup column">
	<section>
		<header class="centered">
			<h1><a href="https://github.com/feltjs/felt">felt</a></h1>
		</header>
		<blockquote class="column-sm">{project.summary}</blockquote>
	</section>
	<section>
		<table>
			<tbody
				>{#each project.repos as repo}<tr
						><td
							><a href={repo.source}
								>{#if repo.name.startsWith('@')}<code>{repo.name}</code>{:else}{repo.name}{/if}</a
							></td
						><td><a href={repo.url}>{stripEnd(repo.url.substring(8), '/')}</a></td><td
							>{repo.summary}</td
						></tr
					>{/each}</tbody
			>
		</table>
	</section>
	<section class="centered panel padded-lg">
		<h3 style="width: 100%">values:</h3>
		<ul>
			{#each project.values as value}<li>{value}</li>{/each}
		</ul>
	</section>
	<footer class="centered">
		<p><a href="https://github.com/feltjs/felt">source code</a></p>
		<a href="https://github.com/feltjs"
			><img
				src="{base}/favicon.png"
				alt="green felt textured heart with the word 'felt' cut out"
			/></a
		>
	</footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	header {
		text-align: center;
	}
	footer img {
		margin: var(--spacing_xl) 0;
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
