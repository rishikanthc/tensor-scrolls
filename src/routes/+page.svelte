<script>
	export let data;
</script>

<div class="pane">
	<div class="left">
		<p>
			TensorScrolls is a repository of concise explanations of research articles I read. I write
			these to understand the papers better and to share my understanding with others. I mostly read
			papers on Deep Learning, Vector Symbolic Architectures and Internet of Things.
		</p>
	</div>
	<div class="right">
		{#each data.posts as post}
			<div class="post">
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
			</div>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
	.pane {
		display: flex;
		justify-content: space-evenly;
		align-items: start;
		margin-top: 8em;
	}
	.left {
		width: max(25%, 384px);
		/*font-family: 'Inter', sans-serif;*/
	}
	.left p {
		font-weight: 300;
		font-family: 'Tisa', sans-serif;
		line-height: 1.6;
		font-size: 18px;
	}
	.post h2 {
		font-family: 'Quicksand', sans-serif;
		font-weight: 500;
		font-size: 20px;
	}
	a {
		text-decoration: none;
	}
	.right {
		width: max(55%, 768px);
	}
</style>
