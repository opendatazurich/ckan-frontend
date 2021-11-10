<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { loadGroupDatasets, pageSize, loadGroup } from '$lib/api';

	export const load: Load = async (args) => {
		const groupId = args.page.params.groupId;
		const data = (await loadGroupDatasets(groupId)(args)) as any;
		const groupData = (await loadGroup(args)) as any;
		return {
			props: {
				...data.props,
				...groupData.props
			}
		};
	};
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import FilterList from '$lib/FilterList.svelte';
	import Filters from '$lib/Filters.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SearchField from '$lib/SearchField.svelte';
	import SortControl from '$lib/SortControl.svelte';
	import { goto } from '$app/navigation';

	export let datasets = [];
	export let search_facets = {};
	export let count = 0;
	export let q = '';
	export let filters = [];
	export let group = {} as any;

	const options = [
		{ id: 'score desc, date_last_modified desc', title: 'Relevanz' },
		{ id: 'title_string asc', title: 'Name aufsteigend' },
		{ id: 'title_string desc', title: 'Name absteigend' },
		{ id: 'date_last_modified desc', title: 'Zuletzt geändert' }
	];

	function submit(e) {
		const query = new URLSearchParams(new FormData(e.target) as any);
		goto(`?${query}`, { keepfocus: true });
	}
</script>

<div role="main">
	<div id="content" class="container">
		<div class="toolbar">
			<ol class="breadcrumb">
				<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>

				<li><a href="/group">Kategorien</a></li>
				<li class="active"><a href="/group/{group.name}">{group.title}</a></li>
			</ol>
		</div>

		<div class="row wrapper">
			<div class="primary span9">
				<section class="module">
					<header class="module-content page-header">
						<ul class="nav nav-tabs">
							<li class="active">
								<a href="/group/{group.id}"><i class="fa fa-sitemap" /> Datensätze</a>
							</li>
							<li>
								<a href="/group/about/{group.id}"><i class="fa fa-info-circle" /> Über</a>
							</li>
						</ul>
					</header>
					<div class="module-content">
						<form
							on:submit|preventDefault={submit}
							id="dataset-search-form"
							class="search-form"
							method="get"
							data-module="select-switch"
						>
							<SearchField placeholder="Datensätze suchen..." />
							<SortControl {options} />

							<h2>
								{count === 0 ? 'Keine' : count} Datensätze {q != '' ? `gefunden für “${q}”` : ''}
							</h2>

							<FilterList {filters} />
							<a class="show-filters btn">Ergebnisse filtern</a>
						</form>

						<DatasetList {datasets} />
					</div>

					<Pagination {count} {pageSize} />
				</section>

				<section class="module">
					<div class="module-content">
						<small>
							Sie können dieses Register auch über die <a href="/showcases?ver=%2F3">API</a> (siehe
							<a href="http://docs.ckan.org/en/2.7/api/">API-Dokumentation</a>) abrufen.
						</small>
					</div>
				</section>
			</div>

			<aside class="secondary span3">
				<div class="module context-info">
					<section class="module-content">
						<div class="image">
							<a href="">
								<img
									src={group.image_display_url}
									width="190"
									height="118"
									alt="arbeit-und-erwerb"
								/>
							</a>
						</div>

						<h1 class="heading">{group.title}</h1>

						<div class="nums">
							<dl>
								<dt>Datensätze</dt>
								<dd><span>{count}</span></dd>
							</dl>
						</div>
					</section>
				</div>
				<Filters {search_facets} />
			</aside>
		</div>
	</div>
</div>

<!--
<div role="main">
	<div id="content" class="container">
		<div class="toolbar">
			<ol class="breadcrumb">
				<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>

				<li><a href="/group">Kategorien</a></li>
				<li class="active"><a href="/group/arbeit-und-erwerb">Arbeit und Erwerb</a></li>
			</ol>
		</div>

		<div class="row wrapper">
			<div class="primary span9">
				<article class="module">
					<header class="module-content page-header">
						<ul class="nav nav-tabs">
							<li class="active">
								<a href="/group/arbeit-und-erwerb"><i class="fa fa-sitemap" /> Datensätze</a>
							</li>
							<li>
								<a href="/group/about/arbeit-und-erwerb"><i class="fa fa-info-circle" /> Über</a>
							</li>
						</ul>
					</header>

					<div class="module-content">
						<form
							id="group-datasets-search-form"
							class="search-form"
							method="get"
							data-module="select-switch"
						>
							<div class="search-input control-group search-giant">
								<input
									type="text"
									class="search"
									name="q"
									value=""
									autocomplete="off"
									placeholder="Datensätze suchen..."
								/>

								<button type="submit" value="search">
									<i class="fa fa-search" />
									<span>Abschicken</span>
								</button>
							</div>

							<div class="form-select control-group control-order-by">
								<label for="field-order-by">Sortieren nach</label>
								<select id="field-order-by" name="sort">
									<option value="score desc, metadata_modified desc">Relevanz</option>

									<option value="title_string asc">Name aufsteigend</option>

									<option value="title_string desc">Name absteigend</option>

									<option value="metadata_modified desc">Zuletzt geändert</option>
								</select>

								<button class="btn js-hide" type="submit">Los</button>
							</div>

							<h2>10 Datensätze</h2>

							<p class="filter-list" />
							<a class="show-filters btn">Ergebnisse filtern</a>
						</form>

						<ul class="dataset-list unstyled">
							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/bfs_wir_besch_sektor_geschlecht_beschgrad_vzaeq_jahr_od4002"
											>Beschäftigte nach Sektor, Geschlecht und Beschäftigungsgrad,
											Vollzeitäquivale...</a
										>
									</h3>

									<div>
										Diese Daten beinhalten aggreggierte Beschäftigtenzahlen in der Stadt Zürich und
										den nächsthöheren Ebenen. Die Daten für die Stadt Zürich werden nach diversen
										Merkmalen...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/bfs_wir_besch_sektor_geschlecht_beschgrad_vzaeq_jahr_od4002"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_gastwirtschaftsbetriebe">Gastwirtschaftsbetriebe</a>
									</h3>

									<div>
										Aktuelle Gastwirtschaftsbetriebe der Stadt Zürich, welche von der Fachgruppe
										«Bewilligung Gastro» der Stadtpolizei Zürich bewilligt wurden. Zweck:
										Administration der...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="shp"
											>shp</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="json"
											>json</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="gpkg"
											>gpkg</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="dxf"
											>dxf</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="csv"
											>csv</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="wfs"
											>wfs</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="wms"
											>wms</a
										>
									</li>

									<li>
										<a href="/dataset/geo_gastwirtschaftsbetriebe" class="label" data-format="wmts"
											>wmts</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											>Räumliche Beschäftigtenstatistik (kantonaler Datensatz)</a
										>
									</h3>

									<div>
										Die Daten umfassen hoch aufgelöste, räumliche Daten zur Zahl der Beschäftigten,
										der Vollzeitäquivalente und der Betriebe, gegliedert nach Branchen. Weitere
										Metadaten finden Sie...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											class="label"
											data-format="csv">csv</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											class="label"
											data-format="shp">shp</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											class="label"
											data-format="wfs">wfs</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											class="label"
											data-format="gpkg">gpkg</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											class="label"
											data-format="gdb">gdb</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_raeumliche_beschaeftigtenstatistik"
											class="label"
											data-format="wms">wms</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_schulweguebergaenge">Schulwegübergänge</a>
									</h3>

									<div>
										Dokumentation der Schulwege und Kategorisierung der Übergänge Zweck: Information
										für der Eltern und Schüler bezüglich der Gefahren bei Strassenüberquerungen auf
										dem Schulweg.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="shp"
											>shp</a
										>
									</li>

									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="json"
											>json</a
										>
									</li>

									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="gpkg"
											>gpkg</a
										>
									</li>

									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="dxf"
											>dxf</a
										>
									</li>

									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="wfs"
											>wfs</a
										>
									</li>

									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="wms"
											>wms</a
										>
									</li>

									<li>
										<a href="/dataset/geo_schulweguebergaenge" class="label" data-format="wmts"
											>wmts</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ktzh_stark_verkehrserzeugende_einrichtungen"
											>stark verkehrserzeugende Einrichtungen (kantonaler Datensatz)</a
										>
									</h3>

									<div>
										Die Daten zu den stark verkehrserzeugenden Einrichtungen (SVE) basieren auf
										Erhebungen des Amtes für Mobilität (ehemals Amt für Verkehr). Die zugrunde
										liegenden Definitionen der...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/ktzh_stark_verkehrserzeugende_einrichtungen"
											class="label"
											data-format="gdb">gdb</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_stark_verkehrserzeugende_einrichtungen"
											class="label"
											data-format="shp">shp</a
										>
									</li>

									<li>
										<a
											href="/dataset/ktzh_stark_verkehrserzeugende_einrichtungen"
											class="label"
											data-format="wfs">wfs</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/stadt_zuerich_losd"
											>Linked Open Statistical Data (LOSD) der Stadt Zürich - SPARQL Endpoint</a
										>
									</h3>

									<div>
										Statistik Stadt Zürich publiziert seine statistischen Daten seit August 2018
										auch als Linked Open Data. In einem ersten Schritt werden sämtliche - z.T. weit
										zurückreichende -...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/stadt_zuerich_losd" class="label" data-format="rdf">rdf</a>
									</li>

									<li>
										<a href="/dataset/stadt_zuerich_losd" class="label" data-format="json">json</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/daten-zur-zuerizahlen-app"
											>Daten zur ZüriZahlen App (Nachführung eingestellt)</a
										>
									</h3>

									<div>
										Dieser Datensatz gab den interessierten Entwicklern die Möglichkeit, auf
										Datensätze aus der ZüriZahlen App zuzugreifen. Die App wurde 2019 eingestellt
										und daher werden die Daten...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/daten-zur-zuerizahlen-app" class="label" data-format="xml"
											>xml</a
										>
									</li>

									<li>
										<a href="/dataset/daten-zur-zuerizahlen-app" class="label" data-format="pdf"
											>pdf</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ktzh_stromanlagen">Stromanlagen (kantonaler Datensatz)</a>
									</h3>

									<div>
										Aufgeführt sind Stromleitungen ab 50 kV, Unterwerke, Wasserkraftwerke, Bei den
										Leitungen wird zwischen Frei- und Kabelleitungen (unterirdisch), sowie bestehend
										und geplant...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/ktzh_stromanlagen" class="label" data-format="gdb">gdb</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/wirtschaft-arbeitsstaetten-beschaeftigte-jahr-quartier-noga"
											>Arbeitsstätten und Beschäftigte nach Jahr, Quartier und NOGA</a
										>
									</h3>

									<div>Betriebszählung 2001, 2005, 2008</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/wirtschaft-arbeitsstaetten-beschaeftigte-jahr-quartier-noga"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/prd_ssz_statistische_nachrichten"
											>Statistische Nachrichten, 1924-2001</a
										>
									</h3>

									<div>
										Die Statistische Nachrichten ist eine von 1924 bis 2001 jährlich erschienene
										Sammlung von einzelnen Aufsätzen zu verschiedensten Themen von Statistik Stadt
										Zürich. Der Datensatz...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/prd_ssz_statistische_nachrichten"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</article>
			</div>

			<aside class="secondary span3">
				<div class="module context-info">
					<section class="module-content">
						<div class="image">
							<a href="">
								<img
									src="https://statistik.stadt-zuerich.ch/modules/ogd_bspe/group_pics/kategorien-01.png"
									width="190"
									height="118"
									alt="arbeit-und-erwerb"
								/>
							</a>
						</div>

						<h1 class="heading">Arbeit und Erwerb</h1>

						<div class="nums">
							<dl>
								<dt>Datensätze</dt>
								<dd><span>10</span></dd>
							</dl>
						</div>
					</section>
				</div>

				<div class="filters">
					<div>
						<section class="module module-narrow module-shallow">
							<h2 class="module-heading">
								<i class="fa fa-filter" />

								Kategorien
							</h2>

							<nav>
								<ul class="unstyled nav nav-simple nav-facet">
									<li class="nav-item">
										<a
											href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=arbeit-und-erwerb"
											title=""
										>
											<span>Arbeit und Erwerb (10)</span>
										</a>
									</li>

									<li class="nav-item">
										<a
											href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=volkswirtschaft"
											title=""
										>
											<span>​​Volks​­wirt​­schaft (9)</span>
										</a>
									</li>

									<li class="nav-item">
										<a
											href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=bevolkerung"
											title=""
										>
											<span>Bevölk­erung (6)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=umwelt" title="">
											<span>Umwelt (5)</span>
										</a>
									</li>

									<li class="nav-item">
										<a
											href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=bauen-und-wohnen"
											title=""
										>
											<span>Bauen und Wohnen (4)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=mobilitat" title="">
											<span>Mobilität (4)</span>
										</a>
									</li>

									<li class="nav-item">
										<a
											href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=verwaltung"
											title=""
										>
											<span>Ver­walt­ung (4)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=bildung" title="">
											<span>Bildung (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=energie" title="">
											<span>Energie (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?groups=freizeit" title="">
											<span>Freizeit (3)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a
									href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?_groups_limit=0"
									class="read-more">Mehr Kategorien anzeigen</a
								>
							</p>
						</section>

						<section class="module module-narrow module-shallow">
							<h2 class="module-heading">
								<i class="fa fa-filter" />

								Tags
							</h2>

							<nav>
								<ul class="unstyled nav nav-simple nav-facet">
									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=sachdaten" title="">
											<span>sachdaten (6)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=geodaten" title="">
											<span>geodaten (5)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=geoportal" title="">
											<span>geoportal (5)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=vektordaten" title="">
											<span>vektordaten (5)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=ktzh" title="">
											<span>ktzh (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=tabellen" title="">
											<span>tabellen (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=punktdaten" title="">
											<span>punktdaten (2)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=stzh" title="">
											<span>stzh (2)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=zeitreihe" title="">
											<span>zeitreihe (2)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?tags=adressen" title="">
											<span>adressen (1)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a
									href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?_tags_limit=0"
									class="read-more">Mehr Tags anzeigen</a
								>
							</p>
						</section>

						<section class="module module-narrow module-shallow">
							<h2 class="module-heading">
								<i class="fa fa-filter" />

								Formate
							</h2>

							<nav>
								<ul class="unstyled nav nav-simple nav-facet">
									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=csv" title="">
											<span>csv (6)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=shp" title="">
											<span>shp (5)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=wfs" title="">
											<span>wfs (5)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=gpkg" title="">
											<span>gpkg (4)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=wms" title="">
											<span>wms (4)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=dxf" title="">
											<span>dxf (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=gdb" title="">
											<span>gdb (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=json" title="">
											<span>json (3)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=wmts" title="">
											<span>wmts (2)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?res_format=pdf" title="">
											<span>pdf (1)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a
									href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?_res_format_limit=0"
									class="read-more">Mehr Formate anzeigen</a
								>
							</p>
						</section>

						<section class="module module-narrow module-shallow">
							<h2 class="module-heading">
								<i class="fa fa-filter" />

								Lizenzen
							</h2>

							<nav>
								<ul class="unstyled nav nav-simple nav-facet">
									<li class="nav-item">
										<a
											href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?license_id=cc-zero"
											title="Creative Commons CCZero"
										>
											<span>Creative Commons CC... (10)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a
									href="/group/1f96ec7f-838a-4592-8f79-b6bf6806ad01?_license_id_limit=0"
									class="read-more">Mehr Lizenzen anzeigen</a
								>
							</p>
						</section>
					</div>
					<a class="close no-text hide-filters"
						><i class="fa fa-times-circle" /><span class="text">close</span></a
					>
				</div>
			</aside>
		</div>
	</div>
</div>
-->
