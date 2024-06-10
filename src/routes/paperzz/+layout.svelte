<script>
	import Logo from '$lib/icons/logo.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Separater from '../../lib/icons/separater.svelte';
</script>

<div class="app">
	<div class="topbar">
		<div class="logo">
			<Logo iconColor="#000" />
		</div>
		<div class="title">TENSOR SCROLLS</div>
		<div class="separator">
			<Separater />
		</div>
		<div class="subtitle">PAPERZZ</div>
		<Navbar />
	</div>
	<div class="content">
		<div class="left"></div>
		<div class="right">
			<slot />
		</div>
	</div>
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: 1fr;
		position: relative;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1rem;
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
	.separator {
		height: 120px;
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
	.subtitle {
		font-size: 32px;
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
