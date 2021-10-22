<script context="module" lang="ts">
	export { loadDataset as load } from '$lib/api';
</script>

<script lang="ts">
	import DatasetLicense from '$lib/DatasetLicense.svelte';
	import DatasetToolbar from '$lib/DatasetToolbar.svelte';

	export let dataset = {} as { groups: any[]; name: string; title: string };
</script>

<div role="main">
	<div id="content" class="container">
		<DatasetToolbar {dataset} />

		<div class="row wrapper">
			<div class="primary span9">
				<article class="module">
					<header class="module-content page-header">
						<ul class="nav nav-tabs">
							<li>
								<a href="/dataset/{dataset.name}"><i class="fa fa-sitemap" /> Datensatz</a>
							</li>
							<li class="active">
								<a href="/dataset/groups/{dataset.name}"><i class="fa fa-users" /> Kategorien</a>
							</li>
							<li>
								<a href="/dataset/showcases/{dataset.name}"><i class="fa fa-picture" /> Showcases</a
								>
							</li>
						</ul>
					</header>

					<div class="module-content">
						<h2 class="hide-heading">Kategorien</h2>

						<ul
							class="media-grid media-grid-zh"
							style="position: relative; width: 468px; height: 196.391px;"
						>
							{#each dataset.groups as group}
								<li class="media-item media-item-zh">
									<img src={group.image_display_url} alt={group.name} class="media-image" />

									<h3 class="media-heading">{group.display_name}</h3>

									<a
										href="/group/{group.name}"
										title="{group.display_name} ansehen"
										class="media-view"
									>
										<span>{group.display_name} ansehen</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</article>
			</div>

			<aside class="secondary span3">
				<DatasetLicense {dataset} />
			</aside>
		</div>
	</div>
</div>
