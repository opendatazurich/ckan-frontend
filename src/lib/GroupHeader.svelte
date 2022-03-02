<script lang="ts">
	import { page } from '$app/stores';
	import { getGroupLinks } from './links';
	import Tabs from './Tabs.svelte';

	$: links = getGroupLinks($page.params.groupId, $page.url.pathname);
</script>

<header class="module-content page-header">
	<Tabs {links} />
</header>
