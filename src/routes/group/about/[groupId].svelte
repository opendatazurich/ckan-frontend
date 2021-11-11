<script context="module" lang="ts">
	export { loadGroup as load } from '$lib/api';
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte';
	import Toolbar from '$lib/Toolbar.svelte';

	export let group = {} as any;
</script>

<Page>
	<Toolbar
		links={[
			['/group', 'Kategorien'],
			[`/group/${group.name}`, group.title]
		]}
	/>

	<div class="row wrapper">
		<div class="primary span9">
			<article class="module">
				<header class="module-content page-header">
					<ul class="nav nav-tabs">
						<li><a href="/group/{group.id}"><i class="fa fa-sitemap" /> Datensätze</a></li>
						<li class="active">
							<a href="/group/about/{group.id}"><i class="fa fa-info-circle" /> Über</a>
						</li>
					</ul>
				</header>

				<div class="module-content">
					<h1>{group.title}</h1>
				</div>
			</article>
		</div>

		<aside class="secondary span3">
			<div class="module context-info">
				<section class="module-content">
					<div class="image">
						<a href="">
							<img src={group.image_url} width="190" height="118" alt={group.id} />
						</a>
					</div>

					<h1 class="heading">{group.title}</h1>

					<div class="nums">
						<dl>
							<dt>Datensätze</dt>
							<dd><span>{group.package_count}</span></dd>
						</dl>
					</div>
				</section>
			</div>
		</aside>
	</div>
</Page>
