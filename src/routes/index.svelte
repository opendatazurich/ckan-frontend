<script context="module" lang="ts">
	export { getHomepage as load } from '$lib/api';
</script>

<script lang="ts">
	import GroupList from '$lib/GroupList.svelte';
	import TagList from '$lib/TagList.svelte';
	import Hero from '$lib/Hero.svelte';

	export let groups = [];
	export let tags = [];
</script>

<Hero />

<div class="layout_section">
	<div class="layout_wrapper">
		<div class="layout_columns var_four_columns">
			<div class="var_three_quarters">
				<div>
					<div class="mod_pagetitle">
						<h2 class="page_title">Werkzeuge, Anleitungen, Vorlagen und Anwendungen</h2>
					</div>

					<div class="col_right col_full_width">
						<div class="mainparsys parsys">
							<div class="mod_subpageslist section">
								<div class="mod_subpageslist__wrapper ">
									<div class="layout_columns var_two_columns">
										<div class="layout_column">
											<div
												class="mod_newsteaser var_fixed_height var_show_text_mobile var_auto_height_mobile"
											>
												<a
													href="https://stadt-zuerich.ch/portal/de/index/ogd/werkstatt.html"
													class="teaser"
												>
													<div class="content">
														<h3>Daten nutzen</h3>

														<p>
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
															Diese Anwendungen und Visualisierungen sind mit unseren Datensätzen
															entwickelt worden.
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
			<div class="var_one_quarters">
				<div class="mod_pagetitle">
					<h2 class="page_title">Schlagwörter</h2>
				</div>
				<TagList {tags} />
			</div>
		</div>

		<div class="mod_pagetitle">
			<h2 class="page_title">Grösste Kategorien</h2>
		</div>
		<GroupList {groups} />
	</div>
</div>
