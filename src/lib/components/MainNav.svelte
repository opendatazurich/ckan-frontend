<script lang="ts">
	import { page } from '$app/stores';
	$: isActive = (path: string, exact = false) =>
		exact ? $page.url.pathname === path : $page.url.pathname.startsWith(path);
</script>

<ul class="no_back_link">
	<li class:var_active={isActive('/', true)}><a href="/">Startseite</a></li>
	<li class:var_active={isActive('/dataset')}>
		<a href="/dataset">Datensätze</a>
	</li>
	<li class:var_active={isActive('/group')}><a href="/group">Kategorien</a></li>
	<li class:var_active={isActive('/showcase')}>
		<a href="/showcase">Showcases</a>
	</li>
</ul>
