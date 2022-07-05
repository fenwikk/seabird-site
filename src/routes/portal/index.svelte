<script lang="ts">
	import Auth from '$lib/components/Auth.svelte';
	import { currentSite } from '$lib/stores/currentSite';

	import { profile } from '$lib/supabase/stores/profile';
	import { user } from '$lib/supabase/stores/user';
</script>

<div class="container p-6">
	<h2>Name: {$currentSite?.site_info.title}</h2>
	<p>Tagline: {$currentSite?.site_info.tagline}</p>
</div>
