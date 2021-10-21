<script lang="ts">
	import Filter from './Filter.svelte';

	export let search_facets = {} as any;
</script>

<div class="filters">
	<div>
		<Filter key="groups" title="Kategorien" items={search_facets.groups?.items} />
		<Filter key="tags" title="Tags" items={search_facets.tags?.items} />
		<Filter key="res_format" title="Formate" items={search_facets.res_format?.items} />
		<Filter key="license_id" title="Lizenzen" items={search_facets.license_id?.items} />
	</div>
	<a class="close no-text hide-filters"
		><i class="fa fa-times-circle" /><span class="text">close</span></a
	>
</div>
