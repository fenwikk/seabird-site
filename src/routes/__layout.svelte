<script>
    import "../app.css"

    import {supabase} from "../lib/supabase/client"
    import { onMount } from 'svelte';
    import { session } from "$lib/supabase/stores/session";
    import { browser } from "$app/env";

    let path = ``;

    onMount(() => path = window.location.pathname);

    if (browser) {
        $session = supabase.auth.session()
        supabase.auth.onAuthStateChange((_, currentSession) => {
            $session = currentSession
        })
    }
</script>

<slot></slot>