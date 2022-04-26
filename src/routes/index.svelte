<script>
import { goto } from "$app/navigation";

    import { supabase } from "$lib/supabase/client";
    import {user} from "../lib/supabase/sessionStore"

    const signOut = () => {
        supabase.auth.signOut()
        user.set(false)
    }
</script>

<div class="container">
    {#if $user}
        hi
        <button on:click={signOut}>Log Out</button>
    {:else}
        hello
        <button on:click={() => goto("/auth/login")}>Login</button>
    {/if}
</div>