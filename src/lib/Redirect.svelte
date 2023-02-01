<script lang="ts">
	import {browser} from '$app/environment';
	import {goto} from '$app/navigation';
	import {page} from '$app/stores';

	// TODO is there a better way to do this with static websites? searching Kit docs came up short

	export let host = 'https://ui.felt.dev';

	$: url = host + $page.url.pathname;

	// redirect old sketch links to ui.felt.dev
	if (browser) void goto(url);
</script>

redirect to <a href={url}>{url}</a>
