<svelte:head>
	<title>Confused Ramblings - Links</title>
</svelte:head>

<div class="content">
	<article>
		<div class="m-5">
			<h1 class="h1">Links</h1>
			<p>Some random links to cool shit/friends blogs</p>
			<div class="prose">
				<ul class="list">
					<li>
						<a href="https://uuupah.neocities.org/">uuupah, who convinced me to hop on neocities</a>
					</li>
					<li><a href="https://garthrey.neocities.org/">Garthrey, cool bike, cool person.</a></li>
					<li><a href="https://neocities.org">Neocities</a></li>
				</ul>
				<p>
					Posts are tagged, this does something now. Clicking on a tag will filter for posts with
					that tag.
				</p>

				<p>
					This site also has an rss feed at <a
						href="https://scylla.neocities.org/rss.xml"
						data-sveltekit-preload-data="off">/rss.xml</a
					>
				</p>
			</div>
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
