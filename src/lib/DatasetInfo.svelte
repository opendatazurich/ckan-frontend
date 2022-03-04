<script lang="ts">
	import { marked } from 'marked';
	marked.setOptions({ pedantic: false, smartLists: true });

	export let dataset = {} as any;
	$: rows = [
		['Datenowner', dataset.author],
		['Erstmalige Veröffentlichung', dataset.dateFirstPublished],
		['Kontakt', `<a href="mailto:${dataset.maintainer_email}">${dataset.maintainer}</a>`],
		['Zeitraum', dataset.timeRange],
		['Datentyp', dataset.dataType],
		['Aktualisierungs­datum', dataset.dateLastUpdated],
		['Datenlieferant', dataset.data_publisher],
		['Version', dataset.version],
		['Räumliche Beziehung', dataset.spatialRelationship],
		['Aktualisierungs­intervall', dataset.updateInterval],
		['Rechtsgrundlage', dataset.legalInformation]
	];
	$: attributes = dataset.sszFields ? JSON.parse(dataset.sszFields) : [];
</script>

<section class="mod_table var_no_hover">
	<div class="table">
		<table>
			<tbody>
				{#each rows as [label, value]}
					<tr>
						<th>{label}</th>
						<td>
							{@html value}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	{#if dataset.dataQuality}
		<h3>Datenqualität</h3>
		<p>{dataset.dataQuality}</p>
	{/if}

	{#if dataset.sszBemerkungen}
		<h3>Bemerkungen</h3>
		<div class="package-comments">
			{@html marked.parse(dataset.sszBemerkungen)}
		</div>
	{/if}

	{#if attributes}
		<h3>Attribute</h3>
		<div class="table">
			<table>
				<tbody>
					{#each attributes as [label, value]}
						<tr>
							<th>{label}</th>
							<td>
								{value}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</section>
