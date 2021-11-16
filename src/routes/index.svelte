<script context="module" lang="ts">
	import { getHomepage } from '$lib/api';

	export async function load() {
		const props = await getHomepage();

		return {
			props
		};
	}
</script>

<script lang="ts">
	import GroupList from '$lib/GroupList.svelte';
	import AutoSuggestionField from '$lib/AutoSuggestionField.svelte';
	import TagList from '$lib/TagList.svelte';
	import { goto } from '$app/navigation';
	import Page from '$lib/Page.svelte';
	import Accordion from '$lib/Accordion.svelte';
	import SearchField from '$lib/SearchField.svelte';

	export let groups = [];
	export let tags = [];

	function submit(e) {
		const query = new URLSearchParams(new FormData(e.target) as any);
		goto(`/dataset?${query}`, { keepfocus: true });
	}
</script>

<div class="content-wrapper">
	<div class="mod_stageimage ">
		<a href="/">
			<picture>
				<source data-srcset="/zh.png" srcset="zh.png" />
				<!--[if IE 9]></video><![endif]-->
				<img
					alt="open data"
					src="/zh.png"
					data-src="/zh.png"
					data-lazy="fadein"
					class="error"
					data-was-processed="true"
				/>
			</picture>
		</a>
		<section class="stage_info">
			<div class="stage_info_wrapper">
				<h1 id="anchorContent" class="mod_stageimage__title">
					Willkommen auf dem Open Data Katalog
				</h1>

				<p>
					Der Datenkatalog ist Ihr zentraler Einstiegspunkt zur Suche und Nutzung von offenen Daten
					der Stadt Zürich. Die hier veröffentlichten Daten stehen kostenlos und zur freien – auch
					kommerziellen - Weiterverwendung zur Verfügung.
				</p>
			</div>
		</section>
	</div>
</div>

<div data-header="content-wrapper">
	<div class="layout_section">
		<div class="layout_wrapper">
			<!--
			<nav
				class="mod_breadcrumb is_loaded"
				role="navigation"
				aria-label="You are here:"
				data-init="breadcrumb"
			>
				<ul>
					<li class="home">
						<a href="#">
							<span class="home"> Home </span>
						</a>
					</li>
					<li class="">
						<a href="#"> Startseite Portal der Stadt Zürich </a>
					</li>
					<li class="">
						<span>Politik &amp; Recht</span>
					</li>
				</ul>
			</nav>
			-->
			<div class="mod_pagetitle">
				<h2 class="page_title">Datensätze suchen</h2>
			</div>

			<div class="mod_searchfield">
				<form
					on:submit|preventDefault={submit}
					action="/dataset"
					class="search_field"
					role="search"
				>
					<SearchField />
				</form>
			</div>

			<div class="mainparsys parsys">
				<div class="parsys_column two_cols">
					<div class="parsys_column two_cols-c0">
						<h3 class="content-header">Beliebte Schlagwörter</h3>
						<TagList {tags} />
					</div>
					<div class="parsys_column two_cols-c1">
						<div>
							<div class="col_title">
								<h3 class="content-header">Werkzeuge, Anleitungen, Vorlagen und Anwendungen</h3>
							</div>

							<div class="col_right col_full_width">
								<div class="mainparsys parsys">
									<div class="mod_subpageslist section">
										<div class="mod_subpageslist__wrapper ">
											<div class="layout_columns var_two_columns">
												<div class="layout_column">
													<div
														class="mod_newsteaser var_fixed_height var_show_text_mobile var_auto_height_mobile"
														data-init="newsteaser"
														data-newsteaser-multilines-mobile
													>
														<a
															href="https://stadt-zuerich.ch/portal/de/index/ogd/werkstatt.html"
															class="teaser"
														>
															<div class="content" data-newsteaser-content>
																<h3 data-newsteaser-title data-init="ellipsis">Daten nutzen</h3>

																<p data-newsteaser-text data-init="ellipsis">
																	Lernen Sie Werkzeuge, Anleitungen und Vorlagen zur Verarbeitung
																	unserer Datensätze kennen.
																</p>

																<div class="icon-arrow">
																	<span class="visuallyhidden"
																		>weiter lesen in &laquo;Daten nutzen&raquo;</span
																	>
																</div>
															</div>
														</a>
													</div>
												</div>

												<div class="layout_column">
													<div
														class="mod_newsteaser var_fixed_height var_show_text_mobile var_auto_height_mobile"
														data-init="newsteaser"
														data-newsteaser-multilines-mobile
													>
														<a
															href="https://stadt-zuerich.ch/portal/de/index/ogd/anwendungen.html"
															class="teaser"
														>
															<div class="content" data-newsteaser-content>
																<h3 data-newsteaser-title data-init="ellipsis">Anwendungen</h3>

																<p data-newsteaser-text data-init="ellipsis">
																	Diese Anwendungen und Visualisierungen sind mit unseren
																	Datensätzen entwickelt worden.
																</p>

																<div class="icon-arrow">
																	<span class="visuallyhidden"
																		>weiter lesen in &laquo;Anwendungen&raquo;</span
																	>
																</div>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mod_pagetitle">
				<h2 class="page_title">Grösste Kategorien</h2>
			</div>
			<GroupList {groups} />
		</div>
	</div>
</div>
