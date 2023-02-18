<script lang="ts">
	import {stripEnd, stripStart} from '@feltjs/util/string.js';
	import Header from '$lib/Header.svelte';
	import {base} from '$app/paths';
	import {page} from '$app/stores';

	import {project} from '$lib/project';
</script>

<main class="markup column">
	<section>
		<Header>
			<h1>{project.summary}</h1>
		</Header>
	</section>
	<section class="panel padded-md">
		<h2 style="width: 100%">Repos</h2>
		<table>
			<tbody
				>{#each project.repos as repo}<tr
						><td
							><a href={repo.source}
								>{#if repo.name.startsWith('@')}<code>{repo.name}</code>{:else}{repo.name}{/if}</a
							></td
						><td
							><a href={repo.url} class:selected={repo.url === $page.url.href}
								>{stripEnd(stripStart(stripStart(repo.url, 'https://'), 'www.'), '/')}</a
							></td
						><td>{repo.summary}</td></tr
					>{/each}</tbody
			>
		</table>
	</section>
	<section class="centered panel padded-lg">
		<h2 style="width: 100%">Values</h2>
		<ul>
			{#each project.values as value}<li>{value}</li>{/each}
		</ul>
		<p style="width: 100%">
			See <a href="https://github.com/feltjs/felt/blob/main/GOVERNANCE.md">GOVERNANCE.md</a> for more.
		</p>
	</section>
	<footer class="panel padded-md centered">
		<p><a href={project.source}>source code</a></p>
		<a class="footer-image-link" href="https://github.com/feltjs"
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
		padding: 2em;
	}
	h1 {
		font-size: var(--font_size_xl);
	}
	.footer-image-link {
		display: flex;
	}
	tr {
		background-color: var(--tint_dark_0);
	}
	td:first-child,
	td:nth-child(2) {
		font-size: var(--font_size_lg);
	}
	@media (max-width: 640px) {
		tr {
			padding: var(--spacing_xl3) var(--spacing_xs);
			display: flex;
			flex-direction: column;
		}
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
