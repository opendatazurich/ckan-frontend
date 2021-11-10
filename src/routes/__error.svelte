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
	export let status;
	export let error;
</script>

<div role="main">
	<div id="content" class="container">
		<div class="row wrapper no-nav">
			<article class="module">
				<div class="module-content">
					{#if status === 404}
						<h1>404 Not Found</h1>
						<p>Die von Ihnen verwendete URL ist nicht mehr gültig. Möchten Sie gerne:</p>
						<ul>
							<li>
								mehr über die Initiative von Open Data Zürich erfahren? Dann verwenden Sie bitte die
								URL: <a href="http://www.stadt-zuerich.ch/opendata">www.stadt-zuerich.ch/opendata</a
								>.
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
	</div>
</div>
