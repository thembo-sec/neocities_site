<script lang="ts">
	import "../app.postcss";
	import "$lib/GitHubLogo.svelte";
	import "@fortawesome/fontawesome-free/css/fontawesome.css";
	import "@fortawesome/fontawesome-free/css/brands.css";
	import "@fortawesome/fontawesome-free/css/solid.css";
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		initializeStores,
		Drawer,
		LightSwitch,
		getDrawerStore,
	} from "@skeletonlabs/skeleton";
	import type {
		AppRailTile,
		DrawerSettings,
		DrawerStore,
	} from "@skeletonlabs/skeleton";
	import { page } from "$app/stores";
	import GitHubLogo from "$lib/GitHubLogo.svelte";

	initializeStores();

	let currentTile: number = 0;

	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		id: "navigationMenu",
		width: "inline-block",
	};

	function openMenu() {
		drawerStore.open(drawerSettings);
	}

	export let data;
</script>

<Drawer position="left">
	<AppRail active="bg-white text-black">
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.url.pathname === "/about"}
			name="about-tile"
			value={0}
			href="/about"
		>
			<span>About</span>
		</AppRailAnchor>
		<AppRailAnchor
			bind:group={currentTile}
			selected={$page.url.pathname === "/"}
			name="posts-tile"
			value={1}
			href="/"
		>
			<span>Posts</span>
		</AppRailAnchor>
		<svelte:fragment slot="trail">
			<AppRailAnchor
				bind:group={currentTile}
				name="github-tile"
				value={2}
				href="https://github.com/thembo-sec"
			>
				<svelte:fragment slot="lead">
					<GitHubLogo viewBoxSetting={"0 0 100 100"} scale=".6"
					></GitHubLogo>
				</svelte:fragment>
			</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
</Drawer>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="sticky p-1">
		<AppBar
			slotTrail="place-content-end"
			slotDefault="place-content-evenly"
			gridColumns="grid-cols-3"
			background="bg-surface-200-700-token"
		>
			<svelte:fragment slot="lead">
				<button
					type="button"
					class="btn btn-lg variant-filled"
					on:click={openMenu}
				>
					<i class="fa-solid fa-bars text-2xl" />
				</button>
			</svelte:fragment>
			<a href="/"><span class="h3">Incoherent Ramblings</span></a>
			<svelte:fragment slot="trail">
				<div>
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</header>
	<main>
		<slot />
	</main>
</div>
