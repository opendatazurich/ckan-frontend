<script lang="ts">
	import { page } from '$app/stores';
	$: isActive = (path, exact = false) =>
		exact ? $page.path === path : $page.path.startsWith(path);
</script>

<div class="mod_topnav " data-init="topnav">
	<h2 id="anchorNavMain" class="visuallyhidden">Top Nav Title</h2>
	<ul class="no_back_link">
		<li class:var_active={isActive('/', true)}><a href="/">Startseite</a></li>
		<li class:var_active={isActive('/dataset')}><a href="/dataset">Datensätze</a></li>
		<li class:var_active={isActive('/group')}><a href="/group">Kategorien</a></li>
		<li class:var_active={isActive('/showcase')}><a href="/showcase">Showcases</a></li>
	</ul>
</div>
