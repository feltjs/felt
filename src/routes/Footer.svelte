<script lang="ts">
	import SocialLinks from '$lib/SocialLinks.svelte';
</script>

<footer>
	<div class="panel markup">
		<div>operated by Felt Co-op</div>
		<div>
			<a href="https://www.felt.social/">felt.social</a>&nbsp;
			<a href="https://github.com/feltcoop">@feltcoop</a>
		</div>
	</div>
	<slot />
	<SocialLinks />
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 35px;
	}

	.panel {
		padding: var(--spacing_lg);
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: var(--spacing_xl);
	}
</style>
