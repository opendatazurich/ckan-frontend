<script>
	import { slide } from 'svelte/transition';
	import MainNav from './MainNav.svelte';
	let open = false;
	const toggle = () => (open = !open);
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
		<button
			on:click={toggle}
			data-target=".nav-collapse"
			data-toggle="collapse"
			class="btn btn-navbar"
			type="button"
		>
			<span class="fa fa-bars" />
		</button>

		<hgroup class="header-image pull-left">
			<a class="site-logo" href="/"
				><img src="/opendatazurichlogo.png" alt="Open Data Zürich" title="Open Data Zürich" /></a
			>
		</hgroup>

		<div on:click={() => (open = false)} class="nav-collapse collapse" class:open>
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

<style>
	.nav-collapse {
		height: auto;
		max-height: 0;
		transition: max-height 300ms ease-out;
	}
	.open {
		max-height: 20rem;
		transition: max-height 300ms ease-in;
	}
</style>
