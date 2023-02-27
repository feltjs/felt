<script lang="ts">
	import {project} from '$lib/project';
</script>

<h2>Felt's Values</h2>
<ul>
	{#each project.values as value}<li>{value}</li>{/each}
</ul>

<style>
	h2 {
		width: 100%;
		text-align: center;
	}
</style>
