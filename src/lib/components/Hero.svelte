<script lang="ts">
	import { goto } from '$app/navigation';
	import AutoSuggestionField from './AutoSuggestionField.svelte';

	function submit(e: Event) {
		const query = new URLSearchParams(new FormData(e.target as HTMLFormElement) as any);
		goto(`/dataset?${query}`, { keepFocus: true });
	}
</script>

<div class="mod_stageimage">
	<a href="/">
		<picture>
			<source data-srcset="/zh.png" srcset="zh.png" />
			<img alt="open data" src="/zh.png" />
		</picture>
	</a>
	<section class="stage_info">
		<div class="stage_info_wrapper">
			<h1 class="mod_stageimage__title">Willkommen auf dem Open Data Katalog</h1>
			<p>
				Der Datenkatalog ist Ihr zentraler Einstiegspunkt zur Suche und Nutzung von offenen Daten
				der Stadt Zürich. Die hier veröffentlichten Daten stehen kostenlos und zur freien – auch
				kommerziellen - Weiterverwendung zur Verfügung.
			</p>
		</div>
	</section>

	<div class="mod_search">
		<form on:submit|preventDefault={submit} action="/dataset">
			<div class="layout_wrapper">
				<h2>Suchen</h2>
				<div class="layout_columns var_two_columns">
					<div class="layout_column">
						<div class="mod_formautocomplete">
							<div class="mod_formtextinput">
								<AutoSuggestionField placeholder="Datensätze suchen..." />
							</div>
						</div>
					</div>
					<div class="layout_column">
						<input type="submit" class="mod_button var_large" value="Suchen" />
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	.mod_stageimage {
		height: fit-content;
	}
	.stage_info {
		height: 100%;
		display: flex;
		align-items: center;
	}
	@media screen and (min-width: 1024px) {
		.stage_info {
			height: calc(100% - 195px);
		}
	}
</style>
