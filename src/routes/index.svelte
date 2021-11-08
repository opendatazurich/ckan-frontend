<script context="module" lang="ts">
	import { get } from '$lib/api';

	export async function load() {
		const groups = await get('group_list?all_fields=true&limit=6&sort=package_count');
		const { facets } = await get('package_search?facet.field=["tags"]&facet.limit=3&rows=0');
		const tags = Object.entries(facets.tags as Map<string, number>)
			.sort((a, b) => b[1] - a[1])
			.map(([key]) => key);
		return {
			props: {
				groups,
				tags
			}
		};
	}
</script>

<script lang="ts">
	import GroupList from '$lib/GroupList.svelte';
	import AutoSuggestionField from '$lib/AutoSuggestionField.svelte';
	import TagList from '$lib/TagList.svelte';

	export let groups = [];
	export let tags = [];
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
									<AutoSuggestionField placeholder="Datensätze suchen..." />
								</form>
								<h3>Beliebte Schlagwörter</h3>
								<TagList {tags} />
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
