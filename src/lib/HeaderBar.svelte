<script>
	import BurgerIcon from './BurgerIcon.svelte';
	import MetaNav from './MetaNav.svelte';
	import { navigating } from '$app/stores';
	export let open = false;
	let scrollY;
	let lastScrollY;
	$: {
		const temp = lastScrollY;
		lastScrollY = scrollY;
	}
	$: isSticky = scrollY < 121;
	$: hideLogo = scrollY > 10;
	$: {
		if ($navigating) {
			open = false;
		}
	}
</script>

<svelte:window bind:scrollY />

<div
	class="mod_header mod_header--bar"
	class:hide_logo={hideLogo}
	class:is_sticky_topbar={isSticky}
>
	<div class="mod_header__topbar" class:is_not_sticky={!isSticky}>
		<div class="mod_header__topbar-inner">
			<div class="top_actions">
				<MetaNav />

				<div class="actions">
					<div class="mod_searchfield">
						<form action="/search" class="search_field" role="search">
							<label class="search_field__label" for="form_search_keywords">
								Suchen im Open Data Katalog
							</label>

							<input
								id="form_search_keywords"
								type="text"
								class="text"
								name="q"
								value=""
								placeholder="Suche"
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
			<div class="mod_header__logobar-logo">
				<a href="/" class="mod_logo mod_logo--in-bar">
					<img src="/logo.svg" alt="Logo Stadt Zürich" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.is_not_sticky {
		transform: translateY(121px);
	}
</style>
