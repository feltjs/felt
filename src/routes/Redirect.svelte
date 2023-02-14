<script lang="ts">
	import {browser} from '$app/environment';
	import {page} from '$app/stores';
	import {stripStart} from '@feltjs/util/string.js';
	import {goto} from '$app/navigation';

	/**
	 * The target host to redirect to. Defaults to the current `location.host`. Not reactive.
	 */
	export let host = '';

	/**
	 * The target path to redirect to. Defaults to the current `location.pathname`. Not reactive.
	 */
	export let path = $page.url.pathname;

	const url = host + path;

	if (browser) void goto(url, {replaceState: true});
</script>

<!-- Show a link as a backup to handle cases like JS being disabled. -->
<div class="centered-hz markup">
	<p>redirect to <a href={url}>{stripStart(url, 'https://')}</a></p>
</div>
