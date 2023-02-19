<script lang="ts">
	import GithubLogo from '$lib/GithubLogo.svelte';

	export let iconHeight = 64;
</script>

<div class="social">
	<a href="https://github.com/feltjs" rel="me noopener">
		<GithubLogo size={iconHeight} />
	</a>
</div>

<style>
	.social {
		display: flex;
		text-align: center;
	}
	.social a {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		display: flex;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.social a:hover {
		--border_color: var(--active_color);
	}
</style>
