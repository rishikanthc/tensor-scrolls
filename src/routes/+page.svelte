<script>
	import Info from '../lib/icons/info.svelte';
	export let data;
</script>

<div class="pane">
	<div class="left">
		<div class="inner">
			<div class="banner">
				<img
					style="width: 100%; height: 100%;"
					src="tensor_sketch_cropped_colored.png"
					alt="Tensor Scrolls"
				/>
			</div>
			<div class="catch">Machine Learning One Paper at a Time</div>
		</div>
		<div class="desc">
			TensorScrolls is a repository of concise explanations of research articles I read. I write
			these to understand the papers better and to share my understanding with others. I mostly read
			papers on Deep Learning, Vector Symbolic Architectures and Internet of Things.
		</div>
	</div>
	<div class="right">
		{#each data.posts as post}
			<div class="post">
				<div class="row">
					<h2>
						<a href={post.path}>
							{post.meta.title}
						</a>
					</h2>
				</div>
				{#if post.meta.sub}
					<h4 class="sub">{post.meta.sub}</h4>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	.catch {
		font-family: 'HomemadeApple', cursive;
		font-size: 1em;
		text-align: center;
		/* width: 100%; */
		color: #205ea6;
		color: #0e61fe;
	}
	.banner {
		height: 100px;
		width: 100px;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.sub {
		font-family: 'Tisa', sans-serif;
		font-size: 16px;
		font-style: italic;
		font-weight: 400;
	}
	.pane {
		display: flex;
		position: relative;
		justify-content: left;
		/*width: max(100%, 984px);*/
		/*margin: 8em auto 0 auto;*/
		gap: 4rem;
		flex-direction: column;
	}
	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/*gap: 2em;*/
		margin-top: 4em;
		gap: 4em;
	}
	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
		width: 60%;
		/*border: 1px solid black;*/
		padding: 1em;
		border-radius: 10px;
		background-color: #161616;
		box-shadow:
			inset 0 2px 3px #000,
			0 2px 0 hsla(30, 0%, 32%, 0.3);
	}
	.desc {
		display: none;
		font-weight: 350;
		font-family: 'Tisa', sans-serif;
		color: #100f0f;
		color: #a8a8a8;
		line-height: 1.6;
		letter-spacing: 0.5px;
		font-size: 18px;
	}
	.post {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.post h2,
	h4 {
		margin: 0;
		padding: 0;
	}
	.post h2 {
		font-family: 'Quicksand', sans-serif;
		font-family: 'InterDisplay', sans-serif;
		font-family: 'Alegreya', serif;
		font-family: 'IBM Plex Sans', sans-serif;
		line-height: 1.6;
		font-weight: 400;
		font-size: 20px;
	}
	.post h2 a {
		text-decoration: none;
		/*color: black;*/
		color: #5e409d;
		color: #a02f6f;
		color: #78a9ff;
	}
	.right {
		display: flex;
		flex-direction: column;
		gap: 2em;
		max-width: max(50%, 784px);
		/*margin-top: 40%;*/
	}
	.sub {
		/*color: #24837b;*/
		color: #c6c6c6;
	}

	@media (min-width: 710px) {
		.banner {
			height: 200px;
			width: 200px;
		}
		.inner {
			width: 40%;
		}
		.catch {
			font-size: 1.2em;
			width: 250px;
		}
	}
	@media (min-width: 1124px) {
		.pane {
			width: max(100%, 984px);
			margin: 8em auto 0 auto;
			gap: 4rem;
		}
		.inner {
			width: 70%;
		}
		.catch {
			width: 250px;
		}
		.left {
			width: max(30%, 384px);
			flex-direction: column;
			align-items: center;
			justify-content: start;
			position: fixed;
			z-index: 100;
			top: 8em;
			left: 1.5em;
			height: 80svh;
			transform-origin: top left;
			margin-top: 0;
			/*gap: 2em;*/
		}
		.right {
			margin-left: 40%;
			margin-top: 0;
		}
		.desc {
			display: block;
		}
	}
</style>
