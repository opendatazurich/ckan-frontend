<script context="module">
	export const load = (args) => ({
		props: args
	});
</script>

<script lang="ts">
	export let status;
	export let error;
</script>

{#if status === 404}
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
						sich die Platzierung des Dokuments geändert oder es wurde durch eine neue Version
						ersetzt.
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
							Suchen Sie erneut nach dem gewünschten Dokument und ändern Sie allenfalls den
							Favoriten (das Lesezeichen) in Ihrem Browser.
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div data-header="content-wrapper">
		<div class="layout_section">
			<div class="layout_wrapper">
				<div class="mod_pagetitle" data-init="pagetitle">
					<h1 id="anchorContent" class="page_title">Ein Fehler ist aufgetreten (Error {status})</h1>
				</div>
				<div class="mod_message failure">
					<h3 class="title">Hinweis</h3>

					<div class="text">
						{error.message}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
