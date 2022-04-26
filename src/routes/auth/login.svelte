<script lang="ts">
    import { goto } from "$app/navigation";
    import Divider from "$lib/Divider.svelte";
    import { supabase } from "../../lib/supabase/client";

    let loading = true

    let email = ""
    let password = ""

    let loggedIn = supabase.auth.user() != null
    loading = false

    const handleLogin = async (method: "credentials" | "google" | "facebook" | "github") => {
        loading = true
        
        if (method == "credentials") {
            const { error } = await supabase.auth.signIn({ email, password })
         
            if (error != null) {
                alert(JSON.stringify(error))
                return
            }
        }
        else {
            const { error } = await supabase.auth.signIn({ provider: method })
         
            if (error != null) {
                alert(JSON.stringify(error))
                return
            }
        }

        loggedIn = supabase.auth.user() != null
        loading = false
    }
</script>

<h1 class="mb-6">Login</h1>

{#if loading}
    loading...
{:else}
    {#if loggedIn}
    <div class="text-xs border-[1px] p-3 duration-200 mb-3 rounded-md bg-green-100 border-green-300 text-green-700">Passwords do not match!</div>

        <Divider />

        <button on:click={() => goto("/")} class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-md text-white mb-3">Go to Dashboard</button>

    {:else}
        <form class="text-sm text-gray-700">
            <label for="email">Email</label>
            <input class="field" type="email" placeholder="john@example.com" bind:value={email} id="email">

            <label for="password">Password</label>
            <input class="field" type="password" placeholder="**********" bind:value={password} id="password">

            <button on:click={() => handleLogin("credentials")} class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-md text-white mt-3" type="submit">Login</button>

            <Divider />
            
            <button on:click={() => handleLogin("google")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">Google</button>
            <button on:click={() => handleLogin("facebook")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">Facebook</button>
            <button on:click={() => handleLogin("github")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">GitHub</button>
        </form>
    {/if}
{/if}