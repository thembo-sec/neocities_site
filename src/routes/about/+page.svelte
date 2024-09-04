<svelte:head>
	<title>Confused Ramblings - About</title>
</svelte:head>

<div class="container h-full mx-auto flex p-10">
	<div class="space-y-5">
		<h1 class="h1">About</h1>
		<p>Hello, I'm ash (they/them).</p>
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
			Posts are tagged, these don't do anything yet. One day i'll get around to fixing that. They
			will probably be a mix of tech/fasion/personal commentary.
		</p>

		<p>
			This site also has an rss feed at <a href="https://scylla.neocities.org/rss.xml">/rss.xml</a>
		</p>
	</div>
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
