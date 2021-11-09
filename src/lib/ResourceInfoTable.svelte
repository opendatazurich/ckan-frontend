<script lang="ts">
	import { formatTimeAgo } from '$lib/date';
	export let resource;
	const dateFormater = (s: string) =>
		new Date(s).toLocaleDateString('de-CH', { month: 'long', day: 'numeric', year: 'numeric' });

	const relativeFormater = (s: string) => {
		return formatTimeAgo(new Date(s));
	};

	$: allFields = Object.entries(resource)
		.map(([id, value]) => ({ title: id.replaceAll('_', ' '), value }))
		.filter((field) => field.value)
		.sort((a, b) => a.title.localeCompare(b.title));
	$: field = (id, title, formater = (x) => x) => ({
		title,
		value: formater(resource[id]) || 'unbekannt'
	});

	$: fields = [
		field('last_modified', 'Daten wurden zuletzt aktualisiert', dateFormater),
		field('', 'Metadaten zuletzt aktualisiert'),
		field('created', 'Erstellt'),
		field('format', 'Format'),
		field('?', 'Lizenz'),
		field('created', 'Erstellt', relativeFormater),
		field('mimetype', 'Media type'),
		field('size', 'Size'),
		...allFields
	];
</script>

<div class="module-content">
	<h2>Zusätzliche Informationen</h2>
	<table
		class="table table-striped table-bordered table-condensed table-toggle-more"
		data-module="table-toggle-more"
	>
		<thead>
			<tr>
				<th scope="col">Feld</th>
				<th scope="col">Wert</th>
			</tr>
		</thead>
		<tbody>
			{#each fields as field}
				<tr>
					<th scope="row">{field.title}</th>
					<td>{field.value}</td>
				</tr>
			{/each}
			<tr class="toggle-show toggle-show-more">
				<td colspan="2">
					<small>
						<a href="#" class="show-more">Mehr anzeigen</a>
						<a href="#" class="show-less">Verstecken</a>
					</small>
				</td>
			</tr>
		</tbody>
	</table>
</div>
