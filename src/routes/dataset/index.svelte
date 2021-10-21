<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { get } from '$lib/api';

	const pageSize = 20;

	export const load: Load = async ({ page }) => {
		const pageIndex = +(page.query.get('page') || '1');
		const start = (pageIndex - 1) * pageSize;
		const { count, results: datasets } = await get(
			`package_search?rows=${pageSize}&start=${start}`
		);
		return {
			props: {
				datasets,
				count,
				page: pageIndex
			}
		};
	};
</script>

<script lang="ts">
	import DatasetList from '$lib/DatasetList.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SearchField from '$lib/SearchField.svelte';

	export let datasets = [];
	export let count = 0;
</script>

<div role="main">
	<div id="content" class="container">
		<div class="flash-messages" />

		<div class="toolbar">
			<ol class="breadcrumb">
				<li class="home"><a href="/"><i class="fa fa-home" /><span> Start</span></a></li>

				<li class="active"><a href="/dataset">Datensätze</a></li>
			</ol>
		</div>

		<div class="row wrapper">
			<div class="primary span9">
				<section class="module">
					<div class="module-content">
						<form
							id="dataset-search-form"
							class="search-form"
							method="get"
							data-module="select-switch"
						>
							<SearchField placeholder="Datensätze suchen..." />

							<div class="form-select control-group control-order-by">
								<label for="field-order-by">Sortieren nach</label>
								<select id="field-order-by" name="sort">
									<option value="score desc, date_last_modified desc" selected>Relevanz</option>

									<option value="title_string asc">Name aufsteigend</option>

									<option value="title_string desc">Name absteigend</option>

									<option value="date_last_modified desc">Zuletzt geändert</option>
								</select>
							</div>

							<h2>{count} Datensätze</h2>

							<p class="filter-list" />
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
										<a href="/dataset?groups=umwelt" title="">
											<span>Umwelt (188)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=bevolkerung" title="">
											<span>Bevölk­erung (176)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=bauen-und-wohnen" title="">
											<span>Bauen und Wohnen (162)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=basiskarten" title="">
											<span>Basis­karten (133)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=verwaltung" title="">
											<span>Ver­walt­ung (122)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=mobilitat" title="">
											<span>Mobilität (88)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=volkswirtschaft" title="">
											<span>​​Volks​­wirt​­schaft (51)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=politik" title="">
											<span>Politik (29)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=freizeit" title="">
											<span>Freizeit (28)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?groups=gesundheit" title="">
											<span>Ge­sund­heit (22)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a href="/dataset?_groups_limit=0" class="read-more">Mehr Kategorien anzeigen</a>
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
										<a href="/dataset?tags=geodaten" title="">
											<span>geodaten (402)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=geoportal" title="">
											<span>geoportal (397)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=vektordaten" title="">
											<span>vektordaten (318)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=sachdaten" title="">
											<span>sachdaten (228)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=stzh" title="">
											<span>stzh (222)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=tabelle" title="">
											<span>tabelle (191)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=ktzh" title="">
											<span>ktzh (175)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=zeitreihe" title="">
											<span>zeitreihe (175)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=punktdaten" title="">
											<span>punktdaten (117)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?tags=polygondaten" title="">
											<span>polygondaten (91)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a href="/dataset?_tags_limit=0" class="read-more">Mehr Tags anzeigen</a>
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
										<a href="/dataset?res_format=csv" title="">
											<span>csv (437)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=wms" title="">
											<span>wms (330)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=wfs" title="">
											<span>wfs (324)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=shp" title="">
											<span>shp (307)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=gpkg" title="">
											<span>gpkg (301)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=dxf" title="">
											<span>dxf (289)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=wmts" title="">
											<span>wmts (222)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=json" title="">
											<span>json (153)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=gdb" title="">
											<span>gdb (140)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?res_format=tiff" title="">
											<span>tiff (76)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a href="/dataset?_res_format_limit=0" class="read-more">Mehr Formate anzeigen</a>
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
										<a href="/dataset?license_id=cc-zero" title="Creative Commons CCZero">
											<span>Creative Commons CC... (640)</span>
										</a>
									</li>

									<li class="nav-item">
										<a
											href="/dataset?license_id=cc-by-sa"
											title="Creative Commons Attribution Share-Alike"
										>
											<span>Creative Commons At... (12)</span>
										</a>
									</li>

									<li class="nav-item">
										<a href="/dataset?license_id=cc-by" title="Creative Commons Attribution">
											<span>Creative Commons At... (10)</span>
										</a>
									</li>
								</ul>
							</nav>
							<p class="module-footer">
								<a href="/dataset?_license_id_limit=0" class="read-more">Mehr Lizenzen anzeigen</a>
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
