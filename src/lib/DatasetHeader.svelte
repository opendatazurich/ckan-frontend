<script lang="ts">
	export let dataset = {} as any;
</script>

<header class="module-content page-header">
	<ul class="nav nav-tabs">
		<li class="active">
			<a href="/dataset/{dataset.name}"><i class="fa fa-sitemap" /> Datensatz</a>
		</li>
		<li>
			<a href="/dataset/groups/{dataset.name}"><i class="fa fa-users" /> Kategorien</a>
		</li>
		<li>
			<a href="/dataset/showcases/{dataset.name}"><i class="fa fa-picture" /> Showcases</a>
		</li>
	</ul>
</header>
