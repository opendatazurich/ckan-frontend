<script lang="ts">
	import ResourceInfoTable from './ResourceInfoTable.svelte';
	import Table from './Table.svelte';

	export let resource: any;
	export let datastore: any;
	$: fields = (datastore?.fields || []).map(({ id, type }: any) => ({ title: id, value: type }));
</script>

{#if datastore}
	<h2>Datenverzeichnis</h2>
	<Table {fields} headers={['Spalte', 'Typ']} />
{/if}

<ResourceInfoTable {resource} />
