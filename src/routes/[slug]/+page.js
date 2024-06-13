export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, pubYear, authors, venue, abstract, tags } = post.metadata;
	const content = post.default;

	console.log(post);

	return { title, content, pubYear, authors, venue, abstract, tags };
}
