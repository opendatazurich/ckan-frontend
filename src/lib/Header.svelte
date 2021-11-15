<script>
	import BurgerIcon from './BurgerIcon.svelte';
	import MainNav from './MainNav.svelte';
	import { flyX } from '$lib/transitions';
	let open = false;
	function resize(e) {
		console.log(e);
	}
</script>

<div class="layout_wrapper">
	<div>
		<div class="mod_header mod_header--bar " data-init="header">
			<div class="mod_header__topbar" data-header="topbar">
				<div class="mod_header__topbar-inner">
					<div class="top_actions" data-header="topactions">
						<div class="mod_metanav" data-init="metanav" data-header="metanav">
							<h2 id="anchorNavMeta" class="visuallyhidden">Service navigation</h2>
							<ul>
								<li><a href="/" id="anchorContact">Kontakt</a></li>
								<li><a href="/about">Medien</a></li>
								<li><a href="/test">Jobs</a></li>
							</ul>
						</div>

						<div data-searchfield="wrapper" class="actions">
							<div
								class="mod_searchfield "
								data-init="searchfield"
								data-searchfield-autocomplete=""
							>
								<form
									action="/search"
									class="search_field"
									data-searchfield="container"
									role="search"
								>
									<label class="search_field__label" for="form_search_keywords">
										Suche in der ganzen Stadt
									</label>

									<input
										id="form_search_keywords"
										type="text"
										class="text"
										name="q"
										value=""
										placeholder="Suche"
										data-searchfield="field"
										data-header="searchfieldinput"
										autocomplete="off"
									/>
									<input
										id="searchboxform_dep_submit"
										type="submit"
										class="search_button "
										name="search"
										value="Finden"
										data-searchfield="button"
									/>

									<input type="hidden" name="name" data-formautocomplete="get-selected-id" />
								</form>
							</div>

							<BurgerIcon bind:open title="Menü öffnen" />
						</div>
					</div>
				</div>
			</div>

			<div class="mod_header__logobar" data-header="logobar">
				<div class="mod_header__logobar-inner">
					<div class="mod_header__logobar-logo">
						<a href="/" class="mod_logo mod_logo--in-bar" data-header="logo">
							<img
								src="/assets/media/logo/2-logo_stzh_sd_rgb_blau_digital.svg"
								alt="Logo Stadt Zürich"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if open}
		<div transition:flyX class="burger_dropdown is_open" data-header="burger-dropdown">
			<div class="burger_dropdown_wrapper">
				<h1 class="visuallyhidden">Mobile Menü</h1>

				<div class="actionsbar">
					<BurgerIcon bind:open title="Menu schliessen" />
				</div>

				<div class="scrolling_wrapper">
					<h2 class="visuallyhidden">Navigation</h2>
					<div
						class="mod_multilevelnav"
						data-init="multilevelnav"
						data-header="multilevelnav"
						data-multilevelnav-url-pattern="../../tmp/navigation_mocks/mock_1.json"
					>
						<div class="mod_multilevelnav_wrapper">
							<div class="slides_wrapper" data-multilevelnav="slides-wrapper">
								<div class="slide var_active" data-multilevelnav="slide">
									<ul class="no_back_link">
										<!--Navigation root - render only subitems, don't render the abstract root-->

										<li class="var_wrapping_node">
											<a class="" href="../../rootlevel">
												<span>Startseite Portal der Stadt Z&uuml;rich</span>
											</a>
										</li>

										<li class="">
											<a href="../../someurl">Über das Departement</a>
										</li>
										<li class="var_has_subitems">
											<a href="#" data-multilevelnav-id="2">Stadtpolizei</a>
										</li>
										<li class="">
											<a href="../../someurl">Schutz & Rettung</a>
										</li>
										<li class="section ">
											<a href="../../someurl">Dienstabteilung Verkehr</a>
										</li>
										<li class="">
											<a href="../../someurl">Stadtrichteramt</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<h2 class="visuallyhidden">Meta Navigation</h2>
					<div class="mod_metanav" data-init="metanav" data-header="metanav">
						<h2 id="anchorNavMeta" class="visuallyhidden">Service navigation</h2>
						<ul>
							<li><a href="#" id="anchorContact">Kontakt</a></li>
							<li><a href="#">Medien</a></li>
							<li><a href="#">Jobs</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<MainNav />
</div>
