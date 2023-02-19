<script lang="ts">
	import {project} from '$lib/project';
</script>

<h2 style="width: 100%">Felt's Values</h2>
<ul>
	{#each project.values as value}<li>{value}</li>{/each}
</ul>
<p style="width: 100%">
	See <a href="https://github.com/feltjs/felt/blob/main/GOVERNANCE.md">GOVERNANCE.md</a> for more.
</p>
