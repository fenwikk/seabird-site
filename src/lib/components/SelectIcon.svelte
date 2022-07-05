<script lang="ts">
	import { currentSite } from '$lib/stores/currentSite';
	import { supabase } from '$lib/supabase/client';
	import { get } from 'svelte/store';

	export let ico: string;
</script>

<img src={ico} class="w-6 h-6 rounded-full mr-2" alt="" />