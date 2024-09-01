<script lang="ts">
	import { formatDate } from '$lib/utils';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.content);
</script>

<div class="content">
	<article>
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
	</article>
</div>

<style>
	.content {
		height: auto;
	}
	article {
		min-height: calc(100vh - 95px);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		vertical-align: middle;
	}
	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: 1em;
		margin-bottom: 0.5em;
	}
</style>
