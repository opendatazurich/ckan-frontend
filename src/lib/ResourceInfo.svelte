<script lang="ts">
	import ResourceInfoTable from './ResourceInfoTable.svelte';
	import Table from './Table.svelte';

	export let resource;
	export let datastore;
	//.filter((field) => field.id[0] !== '_')
	$: fields = (datastore?.fields || []).map(({ id, type }) => ({ title: id, value: type }));
</script>

{#if datastore}
	<h2>Datenverzeichnis</h2>
	<Table {fields} headers={['Spalte', 'Typ']} />
{/if}

<ResourceInfoTable {resource} />
