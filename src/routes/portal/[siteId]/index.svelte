<script lang="ts">
	import { currentSite } from "$lib/stores/currentSite";
</script>

<div class="container p-6">
	<h2>Name: {$currentSite?.site_info.title}</h2>
	<p>Tagline: {$currentSite?.site_info.tagline}</p>
</div>
