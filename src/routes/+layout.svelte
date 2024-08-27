<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppRail, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton';

	let currentTile: number = 0;
</script>

<title>Confused Ramblings</title>
<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky p-1">
		<AppBar slotTrail="place-content-end">
			Scylla's Blog
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
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
