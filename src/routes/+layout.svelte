<script lang="ts">
	import '@feltjs/felt-ui/style.css';

	import '$routes/style.css';
</script>

<svelte:head>
	<title>felt</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	main {
		max-width: 980px;
		padding: 2em;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
