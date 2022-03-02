<script lang="ts">
	import { page } from '$app/stores';
	$: isActive = (path, exact = false) =>
		exact ? $page.url.pathname === path : $page.url.pathname.startsWith(path);
</script>

<ul class="no_back_link">
	<li class:var_active={isActive('/', true)}><a sveltekit:prefetch href="/">Startseite</a></li>
	<li class:var_active={isActive('/dataset')}>
		<a sveltekit:prefetch href="/dataset">Datensätze</a>
	</li>
	<li class:var_active={isActive('/group')}><a sveltekit:prefetch href="/group">Kategorien</a></li>
	<li class:var_active={isActive('/showcase')}>
		<a sveltekit:prefetch href="/showcase">Showcases</a>
	</li>
</ul>
