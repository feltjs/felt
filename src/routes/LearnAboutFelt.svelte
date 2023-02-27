<a class="panel" href="/about">
	<div class="text">
		<div>about</div>
		<div>Felt</div>
	</div>
	<div class="heart">💚</div></a
>

<style>
	a {
		display: flex;
		font-size: var(--font_size_xl2);
		align-items: center;
		text-align: right;
		padding: var(--spacing_lg);
	}
	a > * {
		width: 50%;
	}
	a:hover,
	a:focus {
		text-decoration: none;
	}
	a:hover .text {
		text-decoration: underline;
	}
	.heart {
		font-size: var(--main_icon_size_md);
		margin-left: var(--spacing_lg);
		text-align: center;
	}
	@media (max-width: 450px) {
		a {
			font-size: 24px;
		}
		.heart {
			font-size: var(--main_icon_size_sm);
			margin-left: var(--spacing_sm);
		}
	}
</style>
