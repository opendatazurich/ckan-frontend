<script lang="ts">
	import { page } from '$app/stores';

	export let pageSize = 20;
	export let boubleSize = 2;
	export let count: number;
	const firstPage = 1;

	$: lastPage = Math.floor(count / pageSize) + 1;
	$: hasPagination = firstPage != lastPage;
	$: query = new URLSearchParams($page.query.toString());
	$: path = $page.path;
	$: pageIndex = +(query.get('page') || '1');
	$: hasPrevious = pageIndex > firstPage;
	$: hasNext = pageIndex < lastPage;
	$: url = (p) => {
		query.set('page', p);
		return `${path}?${query}`;
	};
	$: leftBound = Math.max(pageIndex - boubleSize, firstPage + 1);
	$: rightBound = Math.min(pageIndex + boubleSize, lastPage - 1);
	$: hasLeftSpacer = leftBound > firstPage + 1;
	$: hasRightSpacer = rightBound < lastPage - 1;
	$: pages = hasPagination
		? new Array(rightBound - leftBound + 1).fill(0).map((_, index) => leftBound + index)
		: [];
	$: isActive = (p: number) => p === pageIndex;
</script>

{#if hasPagination}
	<div class="pagination pagination-centered">
		<ul>
			{#if hasPrevious}
				<li><a href={url(pageIndex - 1)}>«</a></li>
			{/if}

			<li class:active={isActive(firstPage)}><a href={url(firstPage)}>{firstPage}</a></li>

			{#if hasLeftSpacer}
				<li class="disabled"><span>...</span></li>
			{/if}

			{#each pages as page}
				<li class:active={isActive(page)}><a href={url(page)}>{page}</a></li>
			{/each}

			{#if hasRightSpacer}
				<li class="disabled"><span>...</span></li>
			{/if}

			<li class:active={isActive(lastPage)}><a href={url(lastPage)}>{lastPage}</a></li>

			{#if hasNext}
				<li><a href={url(pageIndex + 1)}>»</a></li>
			{/if}
		</ul>
	</div>
{/if}

<style>
	.disabled > span {
		padding-top: 7px;
		padding-bottom: 7px;
	}
</style>
