<script context="module" lang="ts">
	const url = (path: string) => `https://data.stadt-zuerich.ch/api/3/action/${path}`;

	export async function load({ fetch, page }) {
		const res = await fetch(url(`group_list?all_fields=true&${page.query}`));
		const data = await res.json();
		return {
			props: {
				groups: data.result
			}
		};
	}
</script>

<script lang="ts">
	import SearchField from '$lib/SearchField.svelte';
	import SortControl from '$lib/SortControl.svelte';

	type Group = {
		display_name: string;
		package_count: number;
		name: string;
		image_url: string;
	};
	export let groups: Group[] = [];
</script>

<div role="main">
	<div id="content" class="container">
		<div class="flash-messages" />

		<div class="toolbar">
			<ol class="breadcrumb">
				<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>

				<li class="active"><a class=" active" href="/group">Kategorien</a></li>
			</ol>
		</div>

		<div class="row wrapper no-nav">
			<div class="primary span12 category-box">
				<article class="module">
					<div class="module-content">
						<h1 class="hide-heading">Kategorien</h1>

						<form
							id="group-search-form"
							class="search-form no-bottom-border"
							method="get"
							data-module="select-switch"
						>
							<SearchField placeholder="Gruppe suchen..." />

							<SortControl />
							<h2>{groups.length} Kategorien gefunden</h2>
						</form>

						<ul class="media-grid media-grid-zh">
							{#each groups as group}
								<li class="media-item media-item-zh">
									<img src={group.image_url} alt={group.name} class="media-image" />

									<h3 class="media-heading">{group.display_name}</h3>

									<strong class="count">{group.package_count} Datensätze</strong>

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
		</div>
	</div>
</div>
