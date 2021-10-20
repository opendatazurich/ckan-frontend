<script lang="ts">
	import { page } from '$app/stores';
	$: isActive = (path, exact = true) => (exact ? $page.path === path : $page.path.startsWith(path));
</script>

<nav class="section navigation">
	<ul class="nav nav-pills">
		<li class:active={isActive('/')}><a href="/">Startseite</a></li>
		<li class:active={isActive('/dataset')}><a href="/dataset">Datensätze</a></li>
		<li class:active={isActive('/group', false)}><a href="/group">Kategorien</a></li>
	</ul>
</nav>
