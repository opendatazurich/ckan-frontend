<script lang="ts">
	import Accordion from './Accordion.svelte';
	import Button from './Button.svelte';
	import Modal from './Modal.svelte';

	export let resourceId;
	let show = false;
</script>

<svelte:head>
	{#if show}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<Button icon="gearwheel" secondary on:click={() => (show = true)}>Daten-API</Button>

{#if show}
	<Modal on:close={() => (show = false)}>
		<div class="modal" aria-hidden="false">
			<div class="modal-header">
				<h3>CKAN Data API</h3>
			</div>
			<div class="modal-body">
				<p>
					<strong
						>Zugriff auf Ressourcen per Web-Schnittstelle mit umfangreichen Suchmöglichkeiten</strong
					>. Weiterführende Information in der
					<a href="http://docs.ckan.org/en/latest/maintaining/datastore.html" target="_blank"
						>zentralen CKAN Data API und DataStore Dokumentation</a
					>.
				</p>
				<div class="accordion" id="accordion2">
					<Accordion open={true} title="API-Schnittstelle »">
						<div class="scroll-container">
							<p>
								Die Daten-Schnittstelle (Data-API) kann über folgende Schnittstellenbefehle der CKAN
								Action API erreicht werden.
							</p>
							<table class="table-condensed table-striped table-bordered">
								<thead />
								<tbody>
									<tr>
										<th scope="row">Erstellen</th>
										<td><code>https://data.stadt-zuerich.ch/api/3/action/datastore_create</code></td
										>
									</tr>
									<tr>
										<th scope="row">Aktualisieren / Einfügen</th>
										<td><code>https://data.stadt-zuerich.ch/api/3/action/datastore_upsert</code></td
										>
									</tr>
									<tr>
										<th scope="row">Abfrage</th>
										<td><code>https://data.stadt-zuerich.ch/api/3/action/datastore_search</code></td
										>
									</tr>
									<tr>
										<th scope="row">Abfrage (mit SQL)</th>
										<td
											><code>https://data.stadt-zuerich.ch/api/3/action/datastore_search_sql</code
											></td
										>
									</tr>
								</tbody>
							</table>
						</div>
					</Accordion>
					<Accordion title="Abfrage läuft »">
						<strong>Abfragebeispiel (erste 5 Ergebnisse)</strong>
						<p>
							<code
								>https://data.stadt-zuerich.ch/api/3/action/datastore_search?resource_id={resourceId}&limit=5</code
							>
						</p>

						<strong>Abfragebeispiel (Ergebnisse die 'jones' enthalten)</strong>
						<p>
							<code
								>https://data.stadt-zuerich.ch/api/3/action/datastore_search?resource_id={resourceId}&q=jones</code
							>
						</p>

						<strong>Abfragebeispiel (mit SQL Befehl)</strong>
						<p>
							<code
								>https://data.stadt-zuerich.ch/api/3/action/datastore_search_sql?sql=SELECT * from "{resourceId}"
								WHERE title LIKE 'jones'</code
							>
						</p>
					</Accordion>
					<Accordion title="Beispiel: Javascript »">
						<p>Eine einfache AJAX (JSONP) Abfrage des Data API mit jQuery.</p>
						<pre>  
	{`
  var data = {
	resource_id: '${resourceId}', // the resource id
	limit: 5, // get 5 results
	q: 'jones' // query for 'jones'
  };
  $.ajax({
	url: 'https://data.stadt-zuerich.ch/api/3/action/datastore_search',
	data: data,
	dataType: 'jsonp',
	success: function(data) {
	alert('Total results found: ' + data.result.total)
	}
  });
    `}
                    </pre>
					</Accordion>
					<Accordion title="Beispiel: Python »">
						<pre>
{`import urllib
url = 'https://data.stadt-zuerich.ch/api/3/action/datastore_search?resource_id=${resourceId}&limit=5&q=title:jones'
fileobj = urllib.urlopen(url)
print fileobj.read()
`}
                      </pre>
					</Accordion>
				</div>
			</div>
			<Button secondary on:click={() => (show = false)}>Schliessen</Button>
		</div>
	</Modal>
{/if}

<style>
	th {
		text-align: center;
	}
	.scroll-container {
		overflow-x: scroll;
	}
</style>
