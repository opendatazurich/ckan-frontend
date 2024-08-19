<script lang="ts">
	import { surveyLink } from '$lib/config';
</script>

{#if surveyLink}
	<div class="eye-catcher">
		<div class="eye-catcher-inner-frame">
			<span>Wie gefällt dir<br />unser Datenkatalog?</span>
			<a href={surveyLink} class="eye-catcher-link">
				Kurze Befragung mitmachen<span class="icon icon_arrow_right"></span>
			</a>
		</div>
	</div>
{/if}

<style>
	.eye-catcher {
		width: 14rem;
		height: 14rem;
		border-radius: 7rem;
		background: #f1f26a;
		color: #000000;
		padding: 0;
		isolation: isolate;
		text-align: center;
		font-family: HelveticaNeueLTW05_85Heavy, 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-style: normal;
		font-weight: 900;
		font-size: 16px;
		line-height: 125%;
		position: absolute;
		z-index: 6;
		top: 6.875rem;
		right: 0.5rem;
	}

	@media screen and (min-width: 1024px) {
		.eye-catcher {
			top: 5rem;
			right: 0;
		}
	}

	.eye-catcher-inner-frame {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}

	.eye-catcher-link {
		color: #7b4fb7;
		text-decoration: none;
	}

	.eye-catcher-link:hover {
		text-decoration: underline;
	}

	.eye-catcher .icon {
		position: relative;
		top: 2px;
		margin-left: 0.25rem;
	}

	.eye-catcher .icon_arrow_right:before {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='14' viewBox='0 0 25 14'%3E%3Cpath fill='%237b4fb7' d='M24.9 7.3c0 .1 0 .1 0 0l-6.3 6.5c-.1.1-.2.2-.4.2-.1 0-.3 0-.3-.1-.2-.2-.2-.5 0-.7l5.5-5.7H.5C.2 7.5 0 7.3 0 7s.2-.5.5-.5h22.8L17.8.8c-.2-.2-.2-.5 0-.7.2-.1.5-.1.7.1l6.3 6.5v.1l.1.1v.4c0-.1 0 0 0 0z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-size: contain;
		width: 25px;
		height: 14px;
		content: '';
		display: inline-flex;
	}
</style>
