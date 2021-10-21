<section class="additional-info module-content">
	<table class="table package-metadata">
		<tbody
			><tr>
				<td>
					<p class="heading">Datenowner</p>

					<p class="metadata">Dienstabteilung Verkehr, Sicherheitsdepartement</p>
				</td>
				<td>
					<p class="heading">Erstmalige Veröffentlichung</p>

					<p class="metadata">13.03.2020</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Kontakt</p>

					<p class="metadata">
						<a href="mailto:opendata@zuerich.ch">Open Data Zürich</a>
					</p>
				</td>
				<td>
					<p class="heading">Zeitraum</p>

					<p class="metadata">2012 - vorgestern</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Datentyp</p>

					<p class="metadata">Einzeldaten</p>
				</td>
				<td>
					<p class="heading">Aktualisierungs­datum</p>

					<p class="metadata">20.10.2021</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Datenlieferant</p>

					<p class="metadata">Statistik Stadt Zürich, Präsidialdepartement</p>
				</td>
				<td>
					<p class="heading">Version</p>

					<p class="metadata">1</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Räumliche Beziehung</p>

					<p class="metadata">Stadt Zürich</p>
				</td>
				<td>
					<p class="heading">Aktualisierungs­intervall</p>

					<p class="metadata">taeglich</p>
				</td>
			</tr>

			<tr>
				<td>
					<p class="heading">Rechtsgrundlage</p>
				</td>
				<td />
			</tr>
		</tbody>
	</table>

	<div class="package-dataquality">
		<h5>Datenqualität</h5>
		<p>Siehe Bemerkungen</p>
	</div>

	<h3>Bemerkungen</h3>
	<div class="package-comments">
		<p><strong>Methodik</strong></p>
		<p>
			Die hier vorhandenen Datensätze weisen die Messwerte der Zählstellen für den motorisierten
			Individualverkehr (MIV) in der Stadt Zürich seit 2012 aus. Die Werte werden <strong
				>täglich geliefert</strong
			> und zeigen jeweils die Stundenwerte pro Zähhlstelle.
		</p>
		<p>
			Um die Auswertung der Zeitreihe zu erleichtern, wurden fehlende Werte (z.B. durch einen
			temporären Ausfall einer Zählstelle) durch imputierte Werte ersetzt. Die hier vorgenommene <strong
				>Imputation</strong
			> basiert auf den Messwerten zum gleichen Zeitpunkt des gleichen Wochentags aus den letzten 5 Jahren.
			Dazu wird ein Faktor zum jeweiligen Wert der vorher gemessenen Stunde berechnet.
		</p>
		<p>
			<strong>Formel:</strong>
			f(x) = (Durchschnitt der Stunde a der letzten gültigen 5 Jahre / Durchschnitt Stunde a-1h der letzten
			gültigen 5 Jahre) Impurtierter Wert ax = (Stundenwert a-1h) * f(x)
		</p>
		<p>
			Imputationen werden nur für einzelne fehlende Stunden vorgenommen. Wenn eine Zählstelle länger
			ausgefallen sind, werden die entsprechenden Werte jeweils mit <code
				>AnzFahrzeugeStatus = Fehlend</code
			> gekenntzeichnet.
		</p>
		<p><a href="" /></p>
		<p><strong>Zeitangaben</strong></p>
		<p>
			Alle <strong>Zeitangaben</strong> sind lokale Zeiten (<a
				href="http://www.timeanddate.com/time/zones/cet">CET - Central Euripean Time</a
			>). Das Datumsformat entspricht dem
			<a href="http://www.w3.org/TR/NOTE-datetime">ISO 8601 Standard</a>
		</p>
		<p>Bei der Zeitumstellung passiert folgendes:</p>
		<ul>
			<li>
				Vorstellen von 2 auf 3 Uhr: Es fehlt eine Stunde (2 Uhr). An diesem Tag werden nur für <strong
					>23 Stunden</strong
				> Werte geliefert.
			</li>
			<li>
				Rückstellen von 3 auf 2 Uhr: Es gibt 2 Werte für 2 Uhr. An diesem Tag werden für <strong
					>25 Stunden</strong
				> Werte geliefert.
			</li>
		</ul>
		<p><a href="" /></p>
	</div>

	<h3>Attribute</h3>
	<div class="package-attributes">
		<table class="table table-striped table-bordered table-condensed">
			<tbody>
				<tr><th>Identifikationsnummer der Messstelle (technisch: MSID)</th></tr>
				<tr><td>Identifikationsnummer der Messstelle (String)</td></tr>

				<tr><th>Name der Messstelle (technisch: MSName)</th></tr>
				<tr><td>Name der Messstelle (String)</td></tr>

				<tr><th>Identifikationsnummer Zählstelle (technisch: ZSID)</th></tr>
				<tr><td>Identifikationsnummer der Zählstelle (String)</td></tr>

				<tr><th>Name der Zählstelle (technisch: ZSName)</th></tr>
				<tr><td>Name der Zählstelle (String)</td></tr>

				<tr><th>Achse (Strasse) der Messstelle (technisch: Achse)</th></tr>
				<tr><td>Strasse an der die Zählstelle steht (String)</td></tr>

				<tr><th>Hausnummer (technisch: HNr)</th></tr>
				<tr
					><td
						>Wenn möglich wird die Adresse (Strassenname und Hausnummer), bei der die Zählstelle
						steht, angegeben. Ansonsten steht der Wert "Unbekannt" in diesem Feld (String)</td
					></tr
				>

				<tr><th>Höhe der Achse (Bezeichnung) (technisch: Hoehe)</th></tr>
				<tr><td>Bezeichnung auf welcher Höhe bei der Achse sich die Zählstelle befindet</td></tr>

				<tr><th>Ost-Koordinate (technisch: EKoord)</th></tr>
				<tr><td>Ost-Koordinate (CH1903+/LV95)</td></tr>

				<tr><th>Nord-Koordinate (technisch: NKoord)</th></tr>
				<tr><td>Nord-Koordinate (CH1903+/LV95)</td></tr>

				<tr><th>Richtung der Messung (technisch: Richtung)</th></tr>
				<tr><td>Richtung in die eine Zählstelle misst (String)</td></tr>

				<tr><th>Identifikationsnummer Gruppe (technisch: Knummer)</th></tr>
				<tr
					><td
						>Identifikationsnummer der Gruppe von Messstellen. Messstellen sind meistens in Gruppen
						zusammengefasst, welche räumlich nahe beieinander liegen (z.B. stadteinwärts und
						stadtauswärts an der gleichen Strasse)</td
					></tr
				>

				<tr><th>Name der Gruppe (technisch: Kname)</th></tr>
				<tr><td>Name der Gruppe von Messstellen (String)</td></tr>

				<tr><th>Anzahl Detektoren (technisch: AnzDetektoren)</th></tr>
				<tr><td>Anzahl Detektoren der Zählstelle (Integer)</td></tr>

				<tr><th>Detektor 1 der Messstelle (technisch: D1ID)</th></tr>
				<tr><td>ID des Detektors 1 der Zählstelle oder "Unbekannt" (String)</td></tr>

				<tr><th>Detektor 2 der Messstelle (technisch: D2ID)</th></tr>
				<tr><td>ID des Detektors 2 der Zählstelle oder "Unbekannt" (String)</td></tr>

				<tr><th>Detektor 3 der Messstelle (technisch: D3ID)</th></tr>
				<tr><td>ID des Detektors 3 der Zählstelle oder "Unbekannt" (String)</td></tr>

				<tr><th>Detektor 4 der Messtelle (technisch: D4ID)</th></tr>
				<tr><td>ID des Detektors 4 der Zählstelle oder "Unbekannt" (String)</td></tr>

				<tr><th>Datum und Zeit der Messung (technisch: MessungDatZeit)</th></tr>
				<tr
					><td
						>Eine Messung bezieht sich immer auf eine Stunde. Dieses Feld gibt den Startzeitpunkt
						der Messung an (Datetime, ISO-8601)</td
					></tr
				>

				<tr><th>Datum der Lieferung (technisch: LieferDat)</th></tr>
				<tr
					><td
						>Die Daten werden täglich geliefert. Dieses Feld gibt an, wann die Daten zuletzt
						geliefert wurden (Date, ISO-8601)</td
					></tr
				>

				<tr><th>Anzahl Fahrzeuge (technisch: AnzFahrzeuge)</th></tr>
				<tr
					><td
						>Die Anzahl Fahrzeuge in der Stunde (gemäss MessungDatZeit) an dieser Zählstelle. Wenn
						der Wert fehlt, gibt es für diesen Zeitpunkt keine Messung (Integer)</td
					></tr
				>

				<tr><th>Status des Messung (technisch: AnzFahrzeugeStatus)</th></tr>
				<tr
					><td
						>Dieses Feld gibt an, wie der Wert in AnzFahrzeuge zustande kam. Mögliche Werte:
						Gemessen (=gemessener Wert von der Messstelle), Fehlend (=es wurde kein Wert gemessen,
						z.B. beim Ausfall der Messstelle), Imputiert (=es wurde kein Wert gemessen, stattdessen
						wurde der Wert imputiert, d.h. anhand historischer Daten vervollständigt. SIehe dazu
						auch die Bemerkungen zur Methodik) (String)</td
					></tr
				>
			</tbody>
		</table>
	</div>
</section>
