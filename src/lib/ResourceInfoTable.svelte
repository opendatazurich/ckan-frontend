<script lang="ts">
	import { formatTimeAgo } from '$lib/date';
	import Table from './Table.svelte';
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

<h2>Zusätzliche Informationen</h2>

<Table {fields} />
