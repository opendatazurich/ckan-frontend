<script lang="ts">
	import {surveyLink} from "$lib/config";
	import BurgerIcon from './BurgerIcon.svelte';
	import MetaNav from './MetaNav.svelte';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	export let open = false;
	let scrollY: number;
	const yMargin = 121;

	$: isSticky = scrollY < yMargin;
	$: hideLogo = scrollY > 10;
	$: {
		if ($navigating) {
			open = false;
		}
	}
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:window bind:scrollY />

<div
	style="--y-margin: {yMargin}px;"
	class="mod_header mod_header--bar"
	class:hide_logo={hideLogo}
	class:is_sticky_topbar={isSticky}
	class:contains_survey_link={surveyLink}
>
	<div class="mod_header__topbar" class:is_not_sticky={!isSticky && mounted}>
		<div class="mod_header__topbar-inner">
			<div class="top_actions">
				<MetaNav />

				<div class="actions">
					<div class="mod_searchfield">
						<form action="/dataset" class="search_field" role="search">
							<label class="search_field__label" for="form_search_keywords">
								Suchen im Open Data Katalog
							</label>

							<input
								id="form_search_keywords"
								type="text"
								class="text"
								name="q"
								placeholder="Datensätze suchen..."
								autocomplete="off"
							/>
						</form>
					</div>

					<BurgerIcon bind:open title="Menü öffnen" />
				</div>
			</div>
		</div>
	</div>

	<div class="mod_header__logobar">
		<div class="mod_header__logobar-inner">
			<div class="stage-color mod_header__logobar-logo">
				<a href="/" class="stage-color mod_logo mod_logo--in-bar">
					<img class="stage-color" src="/logo.svg" alt="Logo Stadt Zürich" />
				</a>
			</div>

			{#if surveyLink}
				<div class="stage-color mod_header__logobar-logo">
					<a href="{surveyLink}" class="stage-color mod_logo mod_logo--in-bar">
						Wie gefällt dir unser Datenkatalog? - Mach mit bei unser kurzen Befragung
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.is_not_sticky {
		transform: translateY(var(--y-margin));
	}
	.stage-color {
		background-color: var(--color-stage);
	}
	.contains_survey_link .mod_header__logobar-logo {
		height: auto;
		flex-wrap: wrap;
	}

	.contains_survey_link .mod_header__logobar-inner,
	.contains_survey_link .mod_header__topbar-inner {
		flex-wrap: wrap;
		display: flex;
	}
</style>
