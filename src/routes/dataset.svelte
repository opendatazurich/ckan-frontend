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
							<div class="search-input control-group search-giant">
								<input
									id="ogdzh_search"
									type="text"
									class="search"
									name="q"
									value=""
									autocomplete="off"
									placeholder="Datensätze suchen..."
									data-module="autocomplete-ogdzh-facet-search"
								/>
							</div>

							<div class="form-select control-group control-order-by">
								<label for="field-order-by">Sortieren nach</label>
								<select id="field-order-by" name="sort">
									<option value="score desc, date_last_modified desc" selected>Relevanz</option>

									<option value="title_string asc">Name aufsteigend</option>

									<option value="title_string desc">Name absteigend</option>

									<option value="date_last_modified desc">Zuletzt geändert</option>
								</select>
							</div>

							<h2>662 Datensätze</h2>

							<p class="filter-list" />
							<a class="show-filters btn">Ergebnisse filtern</a>
						</form>

						<ul class="dataset-list unstyled">
							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/sid_dav_verkehrszaehlung_miv_od2031"
											>Daten der Verkehrszählung zum motorisierten Individualverkehr
											(Stundenwerte),...</a
										>
									</h3>

									<div>
										Die hier verfügbaren Datensätze beinhalten die täglich aktualisierten Messwerte
										zum motorisierten Individualverkehr (MIV) in der Stadt Zürich, welche von den
										zahlreichen...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/sid_dav_verkehrszaehlung_miv_od2031"
											class="label"
											data-format="csv">csv</a
										>
									</li>

									<li>
										<a
											href="/dataset/sid_dav_verkehrszaehlung_miv_od2031"
											class="label"
											data-format="pdf">pdf</a
										>
									</li>

									<li>
										<a
											href="/dataset/sid_dav_verkehrszaehlung_miv_od2031"
											class="label"
											data-format="zip">zip</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ted_taz_verkehrszaehlungen_werte_fussgaenger_velo"
											>Daten der automatischen Fussgänger- und Velozählung - Viertelstundenwerte</a
										>
									</h3>

									<div>
										Die täglich aktalisierten **Zähldaten** werden vom Tiefbauamt der Stadt Zürich
										in eigener Regie erhoben. Die Zählstellen sind über das Stadtgebiet verteilt.
										Die...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/ted_taz_verkehrszaehlungen_werte_fussgaenger_velo"
											class="label"
											data-format="csv">csv</a
										>
									</li>

									<li>
										<a
											href="/dataset/ted_taz_verkehrszaehlungen_werte_fussgaenger_velo"
											class="label"
											data-format="pdf">pdf</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/politik_stimmbeteiligung-vor-urnengangen"
											>Stimmbeteiligung in Prozent vor Urnengängen</a
										>
									</h3>

									<div>
										Vor Urnengängen informiert die Stadtkanzlei regelmässig über den Stand der
										Stimmbeteiligung per brieflicher Abgabe.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/politik_stimmbeteiligung-vor-urnengangen"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ugz_luftschadstoffmessung_stundenwerte"
											>Stündlich aktualisierte Luftqualitätsmessungen, seit 1983</a
										>
									</h3>

									<div>
										Dieses Dataset umfasst Stundenmesswerte seit 1983 bis zur letzten aktuellen
										Stunde, aufgeteilt in Jahresdateien. Darin enthalten sind die Stundenmittelwerte
										des entsprechenden...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/ugz_luftschadstoffmessung_stundenwerte"
											class="label"
											data-format="json">json</a
										>
									</li>

									<li>
										<a
											href="/dataset/ugz_luftschadstoffmessung_stundenwerte"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ugz_meteodaten_stundenmittelwerte"
											>Stündlich aktualisierte Meteodaten, seit 1992</a
										>
									</h3>

									<div>
										Der Datensatz umfasst Stundenwerte ab 1992 bis zur letzten aktuellen Stunde
										aufgeteilt in Jahresdateien. Darin enthalten sind die Stationen
										Stampfenbachstrasse, Schimmelstrasse...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/ugz_meteodaten_stundenmittelwerte"
											class="label"
											data-format="json">json</a
										>
									</li>

									<li>
										<a
											href="/dataset/ugz_meteodaten_stundenmittelwerte"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/vbz_frequenzen_hardbruecke"
											>Fahrgastfrequenzen an der VBZ-Haltestelle Hardbrücke</a
										>
									</h3>

									<div>
										Diese Daten beinhalten die Personenfrequenzen verschiedener Zähllinien an der
										VBZ-Haltestelle Hardbrücke, an der die Linie 33, 72, 83 und die Linie 8
										verkehren. Mit diesem...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/vbz_frequenzen_hardbruecke" class="label" data-format="csv"
											>csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/erz_abfallmenge_energie_khkw"
											>Monatliche Menge Abfall, Reststoff und Energie (Wärme- und Stromabgabe)</a
										>
									</h3>

									<div>
										Dieser Datensatz beinhaltet die monatlichen Mengen der im Kehrichtheizkraftwerks
										Hagenholz thermisch verwerterten Abfällen [to], den daraus resultierten
										abtransportierten...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/erz_abfallmenge_energie_khkw" class="label" data-format="csv"
											>csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/erz_abwassermenge_klaerwerk_werdhoelzli"
											>Behandelte Abwassermenge im Klärwerk Werdhölzli in m3/d</a
										>
									</h3>

									<div>
										Dieser Datensatz beinhaltet die Abwassermenge in Kubikmeter (m³), die pro Tag im
										Klärwerk Werdhölzli behandelt wird. Darin eingeschlossen ist auch Abwasser, das
										während...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/erz_abwassermenge_klaerwerk_werdhoelzli"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/politik_abstimmungsparolen_gemeindeabstimmung_seit2012"
											>Abstimmungsparolen der Parteien im Gemeinderat für Gemeindeabstimmungen,
											seit...</a
										>
									</h3>

									<div>
										Alle Abstimmungsparolen für die Gemeindeabstimmungen in der Stadt Zürich. Es
										werden die Parolen der zum entsprechenden Zeitpunkt im Gemeinderat vertretenen
										Parteien erhoben. Die...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/politik_abstimmungsparolen_gemeindeabstimmung_seit2012"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ssd_schulferien"
											>Ferien und schulfreie Tage der Volksschule der Stadt Zürich, Schuljahre
											2020/...</a
										>
									</h3>

									<div>
										Terminliste Ferien und schulfreie Tage der Volksschule der Stadt Zürich.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/ssd_schulferien" class="label" data-format="csv">csv</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/ewz_bruttolastgang_stadt_zuerich"
											>Viertelstundenwerte zum Bruttolastgang elektrische Energie der Stadt Zürich,
											...</a
										>
									</h3>

									<div>
										Diese Datensätze beinhalten den totalen Bruttolastgang der abgegebenen
										elektrischen Energie in der Stadt Zürich als 15-Minuten Zeitreihe seit dem
										1.1.2019. Sie beinhalten die...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/ewz_bruttolastgang_stadt_zuerich"
											class="label"
											data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/sar_geschaeftsberichte"
											>Geschäftsberichte des Stadtrats, ab 1859</a
										>
									</h3>

									<div>
										Seit 1859 legt der Stadtrat mit dem jährlich erscheinenden Geschäftsbericht der
										Gemeinde Rechenschaft über seine Tätigkeit ab.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/sar_geschaeftsberichte" class="label" data-format="csv">csv</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_suchtbehandlung">Suchtbehandlung</a>
									</h3>

									<div>
										Standorte der Suchtbehandlungen in der Stadt Zürich Zweck: Auffinden und
										Darstellen der Daten im Kontaktparagraphen der städtischen Internetseiten sowie
										im Stadtplan.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_suchtbehandlung" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_zueri_wie_neu">Züri wie neu</a>
									</h3>

									<div>
										Züri wie neu Meldungen: Gemeldet werden können sämtliche Schäden an der
										Infrastruktur der Stadt Zürich. Dabei kann es sich um ein Loch im Strassenbelag,
										ein Graffiti am...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_zueri_wie_neu" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											>Nutzungsplanung - kommunale Bau- und Zonenordnung (BZO)</a
										>
									</h3>

									<div>
										Geodaten des Zonenplans und der Ergänzungspläne gemäss Art. 2 BauO. Es handelt
										sich um ein Extrakt des Geodatensatzes "ÖREB-Kataster-STZH" und wird stadtintern
										als...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="shp">shp</a
										>
									</li>

									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="json">json</a
										>
									</li>

									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="gpkg">gpkg</a
										>
									</li>

									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="dxf">dxf</a
										>
									</li>

									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="wfs">wfs</a
										>
									</li>

									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="wms">wms</a
										>
									</li>

									<li>
										<a
											href="/dataset/geo_nutzungsplanung___kommunale_bau__und_zonenordnung__bzo_"
											class="label"
											data-format="wmts">wmts</a
										>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_weiterbildung">Weiterbildung</a>
									</h3>

									<div>
										Standorte der Weiterbildungsangebote in der Stadt Zürich Zweck: Auffinden und
										Darstellen der Daten im Kontaktparagraphen der städtischen Internetseiten sowie
										im Stadtplan.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_weiterbildung" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_departement">Departement</a>
									</h3>

									<div>
										Standorte der Departementssekretariate in der Stadt Zürich Zweck: Auffinden und
										Darstellen der Daten im Kontaktparagraphen der städtischen Internetseiten sowie
										im Stadtplan.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_departement" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_departement" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_amtshaus">Amtshaus</a>
									</h3>

									<div>
										Standorte der Amtshäuser in der Stadt Zürich Zweck: Auffinden und Darstellen der
										Daten im Kontaktparagraphen der städtischen Internetseiten sowie im Stadtplan.
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_amtshaus" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_bauernhofladen">Bauernhofladen</a>
									</h3>

									<div>
										Beinhaltet die Betriebszentren von Haupterwerbslandwirten in der Stadt Zürich
										inklusive der von der Quartierbevölkerung betriebenen Bauernhof Weinegg. Zweck:
										Für den Digitalen...
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_bauernhofladen" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>

							<li class="dataset-item">
								<div class="dataset-content">
									<h3 class="dataset-heading">
										<a href="/dataset/geo_schulanlagen">Schulanlagen</a>
									</h3>

									<div>
										Standorte der Schulanlagen (Kindergarten, Kinderhort, Volksschule, Sonderschule)
										Zweck: Lokalisation der Standorte der Schulanlagen
									</div>
								</div>

								<ul class="dataset-resources unstyled">
									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="csv">csv</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="shp">shp</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="json">json</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="gpkg">gpkg</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="dxf">dxf</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="wfs">wfs</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="wms">wms</a>
									</li>

									<li>
										<a href="/dataset/geo_schulanlagen" class="label" data-format="wmts">wmts</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>

					<div class="pagination pagination-centered">
						<ul>
							<li class="active"><a href="/dataset?page=1">1</a></li>
							<li><a href="/dataset?page=2">2</a></li>
							<li><a href="/dataset?page=3">3</a></li>
							<li class="disabled"><a href="#">...</a></li>
							<li><a href="/dataset?page=34">34</a></li>
							<li><a href="/dataset?page=2">»</a></li>
						</ul>
					</div>
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
