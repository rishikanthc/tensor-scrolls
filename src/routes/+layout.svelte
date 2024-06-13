<script>
	import Logo from '$lib/icons/logo.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="app">
	<div class="topbar">
		<div class="logo">
			<Logo iconColor="#000" />
		</div>
		<div class="title">TENSOR SCROLLS</div>
		<Navbar />
	</div>
	<div class="page">
		<slot />
	</div>
</div>

<style>
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
	.app {
		position: relative;
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

	@media (min-width: 1194px) {
		.topbar {
			position: fixed;
			top: 5px;
			z-index: 100;
			left: 5px;
		}
	}
</style>
