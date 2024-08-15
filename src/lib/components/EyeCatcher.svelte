<script lang="ts">
	import { surveyLink } from '$lib/config';
</script>

{#if surveyLink}
	<div class="eye-catcher-container">
		<div class="eye-catcher">
			<div>Wie gefällt dir<br />unser Datenkatalog?</div>
			<a href={surveyLink} class="">
				Kurze Befragung<br />mitmachen <span class="icon icon_arrow_right"></span>
			</a>
		</div>
	</div>
{/if}

<style>
	.eye-catcher-container {
		position: relative;
		width: 100%;
		z-index: 6;
	}
	.eye-catcher {
		width: 12rem;
		height: 12rem;
		border-radius: 112px;
		background: #f1f26a;
		color: #000000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0;
		gap: 4px;
		isolation: isolate;
		text-align: center;
		font-family: HelveticaNeueLTW05_85Heavy, 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-style: normal;
		font-weight: 900;
		font-size: 16px;
		line-height: 119%;
	}

	@media screen and (max-width: 1023px) {
		.eye-catcher {
			position: absolute;
			top: 9rem;
			left: calc(100% - 12.6rem);
		}
	}

	@media screen and (min-width: 1024px) {
		.eye-catcher {
			position: absolute;
			top: 9rem;
			left: calc(50% - 12.6rem);
		}
	}

	@media screen and (min-width: 1260px) {
		.eye-catcher {
			position: absolute;
			top: 6rem;
			left: calc(70% + 12.6rem);
		}
	}
	.eye-catcher a {
		color: #7b4fb7;
		text-decoration: none;
	}
	.eye-catcher .icon {
		right: 0;
	}
	.eye-catcher .icon_arrow_right::before {
		right: 0;
	}
	.eye-catcher .icon_arrow_right:before {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='14' viewBox='0 0 25 14'%3E%3Cpath fill='%230F05A0' d='M24.9 7.3c0 .1 0 .1 0 0l-6.3 6.5c-.1.1-.2.2-.4.2-.1 0-.3 0-.3-.1-.2-.2-.2-.5 0-.7l5.5-5.7H.5C.2 7.5 0 7.3 0 7s.2-.5.5-.5h22.8L17.8.8c-.2-.2-.2-.5 0-.7.2-.1.5-.1.7.1l6.3 6.5v.1l.1.1v.4c0-.1 0 0 0 0z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-size: contain;
		width: 25px;
		height: 14px;
		content: '';
		display: inline-flex;
	}
	.eye-catcher .icon_arrow_right::before {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='14' viewBox='0 0 25 14'%3E%3Cpath fill='%23070250' d='M24.9 7.3c0 .1 0 .1 0 0l-6.3 6.5c-.1.1-.2.2-.4.2-.1 0-.3 0-.3-.1-.2-.2-.2-.5 0-.7l5.5-5.7H.5C.2 7.5 0 7.3 0 7s.2-.5.5-.5h22.8L17.8.8c-.2-.2-.2-.5 0-.7.2-.1.5-.1.7.1l6.3 6.5v.1l.1.1v.4c0-.1 0 0 0 0z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
