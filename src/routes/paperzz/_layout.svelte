<script>
	export let title;
	export let date;
</script>

<h1>{title}</h1>
<h2>{date}</h2>
<slot />

<style>
	h2 {
		color: blue;
	}
	:global(p) {
		font-family: 'Alegreya', serif;
		font-size: 20px;
		line-height: 1.6;
	}
</style>
