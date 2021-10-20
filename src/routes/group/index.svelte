<script context="module" lang="ts">
	import { url } from '$lib/api';

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
	import GroupList from '$lib/GroupList.svelte';
	import type { Group } from '$lib/GroupList.svelte';

	import SearchField from '$lib/SearchField.svelte';
	import SortControl from '$lib/SortControl.svelte';

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
						<GroupList {groups} />
					</div>
				</article>
			</div>
		</div>
	</div>
</div>
