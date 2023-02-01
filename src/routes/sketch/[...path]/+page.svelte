<script lang="ts">
	import {browser} from '$app/environment';
	import {page} from '$app/stores';
	import {goto} from '$app/navigation';

	const redirect = 'https://ui.felt.dev' + $page.url.pathname;

	// redirect old sketch links to ui.felt.dev
	if (browser) void goto(redirect);
</script>

redirect to <a href="redirect">{redirect}</a>
