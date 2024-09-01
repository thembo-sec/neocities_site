<script lang="ts">
	import { formatDate } from '$lib/utils';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.content);
</script>

<div class="m-5">
	<!-- Title -->
	<hgroup class="m-5">
		<h1 class="h1">
			{data.meta.title}
		</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</div>

<style>
	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: 1em;
		margin-bottom: 0.5em;
	}

	pre.shiki.poimandres {
		border-radius: 0px;
	}
</style>
