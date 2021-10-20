<script>
	import MainNav from '$lib/MainNav.svelte';
</script>

<div class="hide"><a href="#content">Überspringen zum Inhalt</a></div>
<header class="account-masthead">
	<div class="container">
		<nav class="section navigation">
			<nav class="account not-authed">
				<ul class="unstyled" />
			</nav>

			<ul class="nav nav-pills">
				<li>
					<a href="https://www.stadt-zuerich.ch/portal/de/index/ogd.html">Open Data Portal</a>
				</li>
				<li>
					<a href="https://www.stadt-zuerich.ch/portal/de/index/ogd/anwendungen.html">Anwendungen</a
					>
				</li>
				<li>
					<a href="https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt.html">Werkstatt</a>
				</li>
				<li><a href="https://www.stadt-zuerich.ch/portal/de/index/ogd/blog.html">Blog</a></li>
				<li>
					<a href="https://twitter.com/OpenDataZurich" target="_blank"
						><i class="fa fa-twitter header-icon" /></a
					>
				</li>
				<li><a href="mailto:opendata@zuerich.ch"><i class="fa fa-envelope header-icon" /></a></li>
			</ul>
		</nav>
	</div>
</header>
<header class="navbar navbar-static-top masthead">
	<div class="container">
		<button data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar" type="button">
			<span class="fa fa-bars" />
		</button>

		<hgroup class="header-image pull-left">
			<a class="site-logo" href="/"
				><img src="/opendatazurichlogo.png" alt="Open Data Zürich" title="Open Data Zürich" /></a
			>
		</hgroup>

		<div class="nav-collapse collapse">
			<MainNav />
			<form class="section site-search simple-input" action="/dataset" method="get">
				<div class="field">
					<label for="field-sitewide-search">Datensatz-Suche</label>
					<input
						id="field-sitewide-search"
						type="text"
						class="search"
						name="q"
						value=""
						autocomplete="off"
						placeholder=""
						data-module="autocomplete-ogdzh-header-search"
					/>
					<button class="btn-search" type="submit"><i class="fa fa-search" /></button>
				</div>
			</form>
		</div>
	</div>
</header>
<slot />
<footer class="site-footer">
	<div class="container">
		<nav class="footer-links-left row-fluid">
			<ul class="unstyled row-fluid">
				<li>
					<a href="http://www.stadt-zuerich.ch/portal/de/index/ogd/nutzungsbedingungen.html"
						>Nutzungsbedingungen</a
					>
				</li>
				<li><a href="http://stadt-zuerich.ch/portal/de/index/ogd/kontakt.html">Kontakt</a></li>
				<li>
					<a href="https://github.com/opendatazurich" target="_blank">Quellcode auf GitHub</a>
				</li>
			</ul>
		</nav>
		<nav class="footer-links-right row-fluid">
			<ul class="unstyled row-fluid">
				<li><a href="http://ckan.org/" target="_blank">Entwickelt mit CKAN</a></li>
				<li>
					<a href="http://docs.ckan.org/en/latest/api/index.html" target="_blank">CKAN API</a>
				</li>
				<li><a href="https://okfn.org/" target="_blank">Open Knowledge</a></li>
			</ul>
		</nav>
	</div>
</footer>
<footer class="stadtzh-footer">
	<div class="container">
		<a class="logo" href="http://www.stadt-zuerich.ch/"
			><img
				class="logo"
				src="/logo@2x.png"
				alt="Webseite der Stadt Zürich"
				title="Webseite der Stadt Zürich"
			/></a
		>
	</div>
</footer>
