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
