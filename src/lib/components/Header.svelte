<script>
	import BurgerIcon from './BurgerIcon.svelte';
	import EyeCatcher from './EyeCatcher.svelte';
	import MainNav from './MainNav.svelte';
	import { flyX } from '$lib/transitions';
	import MetaNav from './MetaNav.svelte';
	import HeaderBar from './HeaderBar.svelte';
	let open = false;

	export let isStaging = false;
	/* color to provide a visual clue to differ
	 a staging/test or production environment */
	const color = isStaging ? '#ffa500' : '#ffffff';
</script>

<header class="layout_wrapper">
	<EyeCatcher />

	<HeaderBar --color-stage={color} bind:open />

	{#if open}
		<aside transition:flyX class="burger_dropdown is_open">
			<div class="burger_dropdown_wrapper">
				<h1 class="visuallyhidden">Mobile Menü</h1>

				<div class="actionsbar">
					<BurgerIcon bind:open title="Menu schliessen" />
				</div>

				<div class="scrolling_wrapper">
					<h2 class="visuallyhidden">Navigation</h2>
					<div class="mod_multilevelnav">
						<div class="mod_multilevelnav_wrapper">
							<div class="slides_wrapper">
								<div class="slide var_active">
									<MainNav />
								</div>
							</div>
						</div>
					</div>

					<MetaNav />
				</div>
			</div>
		</aside>
	{/if}
	<div class="mod_topnav">
		<h2 id="anchorNavMain" class="visuallyhidden">Top Nav Title</h2>
		<MainNav />
	</div>
</header>

<style>
	header {
		position: relative;
	}
</style>
