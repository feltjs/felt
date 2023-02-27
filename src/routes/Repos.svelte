<script lang="ts">
	import {stripEnd, stripStart} from '@feltjs/util/string.js';
	import {page} from '$app/stores';

	import {project} from '$lib/project';
</script>

<h2 style="width: 100%">Repos</h2>
<!--TODO add a header row to this table-->
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

<style>
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
