<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte';

	export let status;
	export let error;
</script>

<div data-header="content-wrapper">
	<div class="layout_section">
		<div class="layout_wrapper">
			<div class="mod_pagetitle" data-init="pagetitle">
				<h1 id="anchorContent" class="page_title">Dokument nicht auffindbar (Error 404)</h1>
			</div>
			<div class="mod_message failure ">
				<h3 class="title" data-form="formMessageTitle" tabindex="-1">Hinweis</h3>

				<div class="text">
					Ihr gewünschtes Dokument bzw. die gewünschte Seite ist nicht auffindbar. Vielleicht hat
					sich die Platzierung des Dokuments geändert oder es wurde durch eine neue Version ersetzt.
				</div>
			</div>
			<div class="mod_styledtext ">
				<p>Wir empfehlen Ihnen folgende Schritte:</p>
				<ol>
					<li>
						Für den Weg zurück
						<ul class="dash">
							<li>
								geben Sie die gesuchte Adresse (bzw. Webseite) direkt in Ihrem Browser ein,<br />
								z.B. <a href="http://www.stadt-zuerich.ch" target="_top">www.stadt-zuerich.ch</a>
							</li>
							<li>oder betätigen Sie die Zurücktaste (Back Button) in Ihrem Browser.</li>
							<li>
								oder klicken Sie auf unsere automatisch generierte Zurück-Verlinkung: <a
									href="javascript:history.back();">zurück</a
								>
							</li>
						</ul>
					</li>
					<li>
						Suchen Sie erneut nach dem gewünschten Dokument und ändern Sie allenfalls den Favoriten
						(das Lesezeichen) in Ihrem Browser.
					</li>
				</ol>
			</div>
		</div>
	</div>
</div>
<Page>
	<div class="toolbar" />
	<div class="row wrapper no-nav">
		<article class="module">
			<div class="module-content">
				{#if status === 404}
					<h1>404 Not Found</h1>
					<p>Die von Ihnen verwendete URL ist nicht mehr gültig. Möchten Sie gerne:</p>
					<ul>
						<li>
							mehr über die Initiative von Open Data Zürich erfahren? Dann verwenden Sie bitte die
							URL: <a href="http://www.stadt-zuerich.ch/opendata">www.stadt-zuerich.ch/opendata</a>.
						</li>
						<li>
							nach offenen Daten der Stadt Zürich suchen? Dann starten Sie Ihre Suche mit der URL: <a
								href="http://data.stadt-zuerich.ch">data.stadt-zuerich.ch</a
							>.
						</li>
					</ul>
					<p>Haben Sie weitere Fragen? Kontaktieren Sie uns per Mail: opendata[at]zuerich.ch</p>
					<br />
					<p>The URL you are using could not be found. Would you like to:</p>
					<ul>
						<li>
							get more Information about the Open Data Zürich Initiative? Then you should use the
							following URL (German): <a href="http://www.stadt-zuerich.ch/opendata"
								>www.stadt-zuerich.ch/opendata</a
							>.
						</li>
						<li>
							search for Open Data for the City of Zürich? Then you should start your search with
							the following URL: <a href="http://data.stadt-zuerich.ch">data.stadt-zuerich.ch</a>.
						</li>
					</ul>
					<p>
						Do you have further questions? You can contact us anytime by mail:
						opendata[at]zuerich.ch
					</p>
				{:else}
					{error}
				{/if}
			</div>
		</article>
	</div>
</Page>
