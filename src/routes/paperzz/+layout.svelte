<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Logo from '$lib/icons/logo.svelte';
</script>

<div class="app">
	<div class="topbar">
		<div class="logo"><Logo iconColor="#000" /></div>
		<div class="title">TENSOR SCROLLS</div>
		<Navbar />
	</div>
	<div class="pane">
		<slot />
	</div>
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			'topbar .'
			'pane pane';
		/*max-width: 1200px;*/
		height: 98svh;
		overflow: scroll;
		align-items: center;
		justify-content: center;
	}
	.pane {
		grid-area: pane;
		margin: 0 auto;
	}
	.logo {
		background-color: #ffd000;
		padding: 8px;
		display: grid;
		margin-bottom: 4px;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		width: 28px;
		height: 28px;
	}
	.topbar {
		font-family: 'Lombok', sans-serif;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.title {
		margin-top: 4px;
		font-size: 34px;
	}

	@media (min-width: 710px) {
		.logo {
			width: 38px;
			height: 38px;
		}
		.title {
			font-size: 48px;
		}
		.topbar {
			gap: 1rem;
		}
	}
</style>
