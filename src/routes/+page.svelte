<script lang="ts">
	import {stripEnd, stripStart} from '@feltjs/util/string.js';
	import {base} from '$app/paths';
	import {page} from '$app/stores';

	import {project} from '$lib/project';
</script>

<main class="markup column">
	<section>
		<header class="centered">
			<h1><a href={project.source}>{project.name}</a></h1>
		</header>
		<blockquote class="column-sm">{project.summary}</blockquote>
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
	}
	header {
		text-align: center;
	}
	.footer-image-link {
		display: flex;
	}
	h1 {
		margin-top: var(--spacing_xl2);
		text-align: center;
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
