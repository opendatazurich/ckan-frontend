<script lang="ts">
	export let links = [];
	$: isActive = (index) => index === links.length - 1;
</script>

<div class="toolbar">
	<ol class="breadcrumb">
		<li class="home">
			<a href="/"><i class="fa fa-home" /><span> Start</span></a>
		</li>
		{#each links as link, i}
			<li>
				<a class:active={isActive(i)} href={link[0]}>{link[1]}</a>
			</li>
		{/each}
	</ol>
</div>

<style>
	.breadcrumb {
        display: flex;        
        height: 1.3rem;
        padding: 0.15rem 0;
        align-items: center;
	}
    li:after {
        margin-right: 0.35rem;
    }
</style>
