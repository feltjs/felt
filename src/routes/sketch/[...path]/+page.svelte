<script lang="ts">
	import {browser} from '$app/environment';
	import {page} from '$app/stores';
	import {goto} from '$app/navigation';

	// redirect old sketch links to ui.felt.dev
	if (browser) void goto('https://ui.felt.dev' + $page.url.pathname);
</script>

ok
