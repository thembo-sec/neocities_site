<svelte:head>
	<title>Confused Ramblings - About</title>
</svelte:head>

<div class="content">
	<article>
		<div class="m-5">
			<h1 class="h1">About</h1>
			<p>Hello, I'm ash (they/she).</p>
			<p>
				I Needed a spot to throw shit when I felt like putting it in a public place. The code is
				available on my github. This website is currently built using a combination of:
			</p>
			<ul class="list">
				<li><a href="https://svelte.dev">Svelte</a></li>
				<li><a href="https://skeleton.dev">Skeleton</a></li>
				<li><a href="https://neocities.org">Neocities</a></li>
			</ul>
			<p>
				Posts are tagged, this does something now. Clicking on a tag will filter for posts with that
				tag.
			</p>

			<p>
				This site also has an rss feed at <a
					href="https://scylla.neocities.org/rss.xml"
					data-sveltekit-preload-data="off">/rss.xml</a
				>
			</p>
		</div>
	</article>
</div>

<style>
	a {
		text-decoration: underline;
	}

	ul {
		list-style-type: disc;
		padding-left: 2rem;
		margin-block: 1em;
	}

	li {
		display: list-item;
	}
</style>
