<script>
    import { browser } from "$app/env";

    import { goto } from "$app/navigation";

    import { supabase } from "$lib/supabase/client";
    import { session } from "$lib/supabase/stores/session";

    const signOut = () => {
        supabase.auth.signOut()
    }

    if (browser)
        if ($session == null && !window.location.pathname.startsWith("/auth")) goto("/auth/login?redirect=" + window.location.pathname)
</script>

<div class="container">
    {#if $session}
        <div>hi</div>
        <div>{JSON.stringify(supabase.auth.session())}</div>
        <button on:click={signOut}>Log Out</button>
    {:else}
        hello
        <button on:click={() => goto("/auth/login")}>Login</button>
    {/if}
</div>