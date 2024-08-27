<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';

	let currentTile: number = 0;
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky p-1">
		<AppBar>
			<svelte:fragment slot="headline">Scylla's Blog</svelte:fragment>
		</AppBar>
	</header>
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
		<aside class="sticky p-1">
			<AppRail>
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="Posts">
					<span>Posts</span>
				</AppRailTile>
			</AppRail>
		</aside>
		<main class="space-y-4 p-1">
			<slot />
		</main>
	</div>
</div>
