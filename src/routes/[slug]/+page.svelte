<script>
	export let data;
</script>

<div class="frame">
	<div class="sidebar">
		<div class="panel">
			<div class="banner">
				<img
					style="width: 100%; height: 100%;"
					src="tensor_sketch_cropped.png"
					alt="Tensor Scrolls"
				/>
			</div>
			<div class="catch">Machine Learning One Paper at a Time</div>
		</div>
		<div class="abstract">
			<h2>Abstract</h2>
			{data.abstract}
		</div>
		<div class="tags">
			<h2>Tags</h2>
			<div class="items">
				{#each data.tags as tag}
					<div>{tag}</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="main">
		<div class="meta">
			<h1 class="title">{data.title}</h1>
			<div class="authors">
				{#each data.authors as author}
					<div>{author}</div>
				{/each}
			</div>
			<div class="venue">{data.venue} ({data.pubYear})</div>
		</div>
		<svelte:component this={data.content} />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
	.banner {
		height: 100px;
		width: 100px;
	}
	.panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.catch {
		font-family: 'HomemadeApple', cursive;
		font-size: 1.2em;
		text-align: center;
		width: 250px;
	}
	.abstract {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		font-family: 'Tisa', sans-serif;
		font-size: 17px;
		line-height: 1.75;
	}
	.tags {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.items {
		display: flex;
		gap: 2em;
	}

	.sidebar {
		position: fixed;
		z-index: 100;
		top: 8em;
		left: 1.5em;
		justify-content: space-between;
		align-items: center;
		max-width: max(30%, 384px);
		transform-origin: top left;
		gap: 1em;
		/*height: 80svh;*/
		display: none;
		flex-direction: column;
	}
	.frame {
		position: relative;
		/*border: 1px solid #000;*/
		display: flex;
		justify-content: center;
		/*width: max(100%, 984px);*/
		/*grid-template-columns: 0.5fr 3.5fr;*/
		overflow-y: auto;
	}
	.venue {
		font-family: 'Tisa', sans-serif;
		font-size: 1.1rem;
		font-style: italic;
		padding: 0;
		margin: 0;
	}
	.authors {
		margin-top: 2em;
		font-family: 'Tisa', sans-serif;
		font-size: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0;
	}
	:global(h1, h2, h3, h4, h5) {
		font-family: 'Tisa', sans-serif;
		font-family: 'Quicksand', sans-serif;
		font-weight: 520;
	}
	:global(p) {
		/*font-family: 'Alegreya', serif;*/
		font-family: 'Noto Serif', serif;
		font-weight: 380;
		font-size: 16px;
		line-height: 1.6;
	}
	.title {
		font-size: 1.75rem;
		text-align: center;
		margin: 0;
		padding: 0;
	}
	.meta {
		margin: 4em 0;
		display: flex;
		gap: 0em;
		flex-direction: column;
		align-items: center;
		justify-content: top;
	}

	@media (min-width: 710px) {
		.title {
			font-size: 2rem;
		}
	}
	@media (min-width: 1194px) {
		.sidebar {
			display: flex;
		}
		.frame {
			justify-content: left;
			width: max(100%, 984px);
		}
		.main {
			max-width: max(65%, 784px);
			margin-left: 40%;
		}
		:global(p) {
			/*font-family: 'Alegreya', serif;*/
			font-size: 18px;
		}
	}
	@media (min-width: 1280px) {
		.frame {
			justify-content: left;
		}
		.main {
			max-width: max(50%, 784px);
			/*margin: 0 auto;*/
		}
	}
	@media (min-width: 1800px) {
		.banner {
			height: 200px;
			width: 200px;
		}
		.catch {
			font-size: 1.5em;
			width: 300px;
		}
	}
</style>
