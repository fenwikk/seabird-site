<script>
    import "../app.css"

    import {user} from "../lib/supabase/sessionStore"
    import {supabase} from "../lib/supabase/client"
    import { onMount } from 'svelte';

    let path = ``;

    onMount(() => path = window.location.pathname);

    user.set(supabase.auth.user() != null)

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user != null)
    })
</script>

<slot></slot>