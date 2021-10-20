<script context="module" lang="ts">
	import { url } from '$lib/api';

	export async function load({ fetch, page }) {
		const res = await fetch(url(`group_list?all_fields=true&limit=6&sort=package_count`));
		const data = await res.json();
		return {
			props: {
				groups: data.result
			}
		};
	}
</script>

<script lang="ts">
	import GroupList from '$lib/GroupList.svelte';

	export let groups = [];
</script>

<div class="homepage layout-1">
	<div class="container">
		<div class="flash-messages" />
	</div>

	<div role="main" class="hero">
		<div class="container">
			<div class="row row1">
				<div class="span12 col1">
					<div class="module-content box">
						<header>
							<h1 class="page-heading">Willkommen auf dem Open Data Katalog</h1>
							<p>
								Der Datenkatalog ist Ihr zentraler Einstiegspunkt zur Suche und Nutzung von offenen
								Daten der Stadt Zürich. Die hier veröffentlichten Daten stehen kostenlos und zur
								freien – auch kommerziellen - Weiterverwendung zur Verfügung.
							</p>
						</header>
						<div class="row">
							<div class="span6 col1">
								<form class="module-content search-form" method="get" action="/dataset">
									<div class="search-input control-group search-giant">
										<input
											id="ogdzh_search"
											type="text"
											class="search"
											name="q"
											value=""
											autocomplete="off"
											placeholder="Datensätze suchen..."
											data-module="autocomplete-ogdzh-facet-search"
										/>
										<button type="submit">
											<i class="fa fa-search" />
											<span>Suche</span>
										</button>
									</div>
								</form>
								<h3>Beliebte Schlagwörter</h3>

								<a class="tag" href="/dataset?tags=geodaten">geodaten</a>

								<a class="tag" href="/dataset?tags=geoportal">geoportal</a>

								<a class="tag" href="/dataset?tags=vektordaten">vektordaten</a>
							</div>
							<div class="span5 col2">
								<div class="teaser">
									<a href="http://stadt-zuerich.ch/portal/de/index/ogd/werkstatt.html"
										><h3>Daten nutzen</h3></a
									>
									<p>
										Lernen Sie Werkzeuge, Anleitungen und Vorlagen zur Verarbeitung unserer
										Datensätze kennen.
									</p>
								</div>
								<div class="teaser">
									<a href="http://stadt-zuerich.ch/portal/de/index/ogd/anwendungen.html"
										><h3>Anwendungen anschauen</h3></a
									>
									<p>
										Diese Anwendungen und Visualisierungen sind mit unseren Datensätzen entwickelt
										worden.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div role="main">
		<div class="container">
			<div class="row row2">
				<div class="span12 col1">
					<div class="module-content box category-box">
						<header>
							<h2>
								<i class="fa fa-star" /> Grösste Kategorien / <a href="/group">Alle Kategorien</a>
							</h2>
						</header>
						<GroupList {groups} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
