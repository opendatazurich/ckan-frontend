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
			<div class="mod_pagetitle" data-init="pagetitle">
				<h2 id="anchorContent" class="page_title">Datensätze suchen</h2>
			</div>
			<div class="mod_searchfield " data-init="searchfield">
				<form action="#" class="search_field" data-searchfield="container" role="search">
					<label class="search_field__label" for="form_search_keywords">
						Label search field is used for accessability reasons
					</label>

					<input
						id="form_search_keywords"
						class="text"
						name="q"
						value=""
						placeholder="Suche"
						data-searchfield="field"
						autocomplete="off"
					/>
					<button type="submit" class="search_button " data-searchfield="button" />
				</form>
			</div>

			<!-- 2 columns -->
			<div class="mainparsys parsys">
				<div class="parsys_column two_cols">
					<div class="parsys_column two_cols-c0">
						<div class="mod_textandimage">
							<div class="col_title">
								<h3 class="content-header">Links</h3>
							</div>

							<div class="col_left   col_full_width">
								<div class="mod_styledtext ">
									Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
									nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
									nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
									Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
									adipiscing sem neque sed ipsum.<br /><br /><strong>Untertitel</strong><br />luctus
									pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
									vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
									eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
									sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
									cursus nunc,
								</div>
							</div>
						</div>
					</div>
					<div class="parsys_column two_cols-c1">
						<div class="mod_textandimage">
							<div class="col_title">
								<h3 class="content-header">Rechts</h3>
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
														<a href="/portal/de/index/aktuelles/publikationen.html" class="teaser">
															<div class="content" data-newsteaser-content>
																<h3 data-newsteaser-title data-init="ellipsis">Publikationen</h3>

																<p data-newsteaser-text data-init="ellipsis">
																	Informationen zu neu erschienenen st&auml;dtischen Publikationen.
																</p>

																<div class="icon-arrow">
																	<span class="visuallyhidden"
																		>weiter lesen in &laquo;Publikationen&raquo;</span
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
														<a href="/portal/de/index/aktuelles/agenda.html" class="teaser">
															<div class="content" data-newsteaser-content>
																<h3 data-newsteaser-title data-init="ellipsis">Agenda</h3>

																<p data-newsteaser-text data-init="ellipsis">
																	Veranstaltungen mit Kalender der Stadt Z&uuml;rich, Informationen
																	zu F&uuml;hrungen, Vortr&auml;gen, Kursen, Festen, Freizeit,
																	Infoveranstaltungen, Sportanl&auml;ssen, Kultur und Ausstellungen.
																</p>

																<div class="icon-arrow">
																	<span class="visuallyhidden"
																		>weiter lesen in &laquo;Agenda&raquo;</span
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
		</div>
	</div>
</div>

<div class="homepage layout-1">
	<Page hero>
		<div class="row row1">
			<div class="span12 col1">
				<div class="module-content box">
					<header>
						<h1 class="page-heading" />
						<p />
					</header>
					<div class="row">
						<div class="span6 col1">
							<form
								on:submit|preventDefault={submit}
								class="module-content search-form"
								method="get"
								action="/dataset"
							>
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
									Lernen Sie Werkzeuge, Anleitungen und Vorlagen zur Verarbeitung unserer Datensätze
									kennen.
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
	</Page>

	<Page>
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
	</Page>
</div>
