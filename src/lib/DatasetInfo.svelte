<script lang="ts">
	import md from 'marked';
	export let dataset = {} as any;
</script>

<section class="additional-info module-content">
	<table class="table package-metadata">
		<tbody
			><tr>
				<td>
					<p class="heading">Datenowner</p>

					<p class="metadata">{dataset.author}</p>
				</td>
				<td>
					<p class="heading">Erstmalige Veröffentlichung</p>

					<p class="metadata">{dataset.dateFirstPublished}</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Kontakt</p>

					<p class="metadata">
						<a href="mailto:{dataset.maintainer_email}">{dataset.maintainer_email}</a>
					</p>
				</td>
				<td>
					<p class="heading">Zeitraum</p>

					<p class="metadata">{dataset.timeRange}</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Datentyp</p>

					<p class="metadata">{dataset.dataType}</p>
				</td>
				<td>
					<p class="heading">Aktualisierungs­datum</p>

					<p class="metadata">{dataset.dateLastUpdated}</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Datenlieferant</p>

					<p class="metadata">{dataset.data_publisher}</p>
				</td>
				<td>
					<p class="heading">Version</p>

					<p class="metadata">{dataset.version}</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Räumliche Beziehung</p>

					<p class="metadata">{dataset.spatialRelationship}</p>
				</td>
				<td>
					<p class="heading">Aktualisierungs­intervall</p>

					<p class="metadata">{dataset.updateInterval}</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Rechtsgrundlage</p>
					<p class="metadata">{dataset.legalInformation}</p>
				</td>
				<td />
			</tr>
		</tbody>
	</table>

	<div class="package-dataquality">
		<h5>Datenqualität</h5>
		<p>{dataset.dataQuality}</p>
	</div>

	<h3>Bemerkungen</h3>
	<div class="package-comments">
		{@html md(dataset.sszBemerkungen)}
	</div>

	<h3>Attribute</h3>
	<div class="package-attributes">
		<table class="table table-striped table-bordered table-condensed">
			<tbody>
				{#each JSON.parse(dataset.sszFields) as [title, text]}
					<tr>
						<th>{title}</th>
					</tr>
					<tr><td>{text}</td> </tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
