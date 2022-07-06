<script>
	import "../app.css";
	import seabird from "$lib/assets/blob.ico";
	import portal from "$lib/assets/portal.png";
	import { browser } from "$app/env";
</script>

<svelte:head>
	{#if browser}
		{#if location.pathname.startsWith("/portal")}
			<link rel="icon" type="image/x-icon" href={portal} />
		{:else}
			<link rel="icon" type="image/x-icon" href={seabird} />
		{/if}
	{/if}
</svelte:head>

<slot />
