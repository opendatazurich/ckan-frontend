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
	<div class="pagination">
		{#if hasPrevious}
			<a href={url(pageIndex - 1)}>
				<span class="icon icon_ico_left" />
			</a>
		{/if}

		<a class:active={isActive(firstPage)} href={url(firstPage)}>{firstPage}</a>

		{#if hasLeftSpacer}
			<span>...</span>
		{/if}

		{#each pages as page}
			<a class:active={isActive(page)} href={url(page)}>{page}</a>
		{/each}

		{#if hasRightSpacer}
			<span>...</span>
		{/if}

		<a class:active={isActive(lastPage)} href={url(lastPage)}>{lastPage}</a>

		{#if hasNext}
			<a href={url(pageIndex + 1)}>
				<span class="icon icon_ico_right" />
			</a>
		{/if}
	</div>
{/if}

<style>
	.pagination {
		padding-top: 1.25rem;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}
	.icon {
		display: flex;
	}
	.pagination > * {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		width: 2.5em;
		height: 2.5em;
		border-style: solid;
		border-color: rgb(242, 242, 242);
		border-left-width: 1px;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-right-width: 0px;
	}
	.pagination > *:last-child {
		border-right-width: 1px;
	}

	a:visited {
		color: inherit;
	}
	.pagination > .active,
	.pagination > a:hover {
		background-color: #0f05a0;
		color: white !important;
		transition: color 100ms linear;
		border-color: none;
	}
</style>
