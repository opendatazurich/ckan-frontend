<script>
	import Logo from './Logo.svelte';
</script>

<header class="h-[76px] flex flex-col md:flex-col-reverse">
	<div class="bg-zueri-blue">
		<Logo />
	</div>
	<nav class="bg-grey-5 flex h-[59px] justify-end pr-5">
		<a href="/hilfe">Hilfe</a>
		<button> Open Menu </button>
	</nav>
</header>
