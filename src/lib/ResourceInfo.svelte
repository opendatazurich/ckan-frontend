<script lang="ts">
	import ResourceInfoTable from './ResourceInfoTable.svelte';

	export let resource;
	export let datastore;
	$: fields = (datastore?.fields || []).filter((field) => field.id[0] !== '_') as {
		id: string;
		type: string;
	}[];
</script>

{#if datastore}
	<h2>Datenverzeichnis</h2>
	<table
		class="table table-striped table-bordered table-condensed table-toggle-more"
		data-module="table-toggle-more"
	>
		<thead>
			<tr>
				<th scope="col">Spalte</th>
				<th scope="col">Typ</th>
				<th scope="col">Bezeichnung</th>
				<th scope="col">Beschreibung</th>
			</tr>
		</thead>

		<tbody>
			{#each fields as field}
				<tr>
					<td>{field.id}</td>
					<td>{field.type}</td>
					<td />
					<td />
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<ResourceInfoTable {resource} />
