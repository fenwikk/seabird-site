<script lang="ts">
    import { browser } from "$app/env";

    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Divider from "$lib/Divider.svelte";
    import { session } from "$lib/supabase/stores/session";
    import { supabase } from "../../lib/supabase/client";

    let redirect = $page.url.searchParams.get("redirect") || "/"
    console.log(redirect)

    let loading = false

    let email = ""
    let password = ""

    if (browser) {
        if ($session != null)
            goto("/")
    }

    const handleLogin = async (method: "credentials" | "google" | "facebook" | "github") => {
        loading = true
        
        if (method == "credentials") {
            const { error } = await supabase.auth.signIn({ email, password })
         
            if (error != null) {
                alert(error.message)
                return
            }
            else
                goto(redirect)
        }
        else {
            const { error } = await supabase.auth.signIn({ provider: method }, { redirectTo: "http://localhost:3000/auth/redirect?url=" + redirect })
         
            if (error != null) {
                alert(error.message)
                return
            }
        }
    }
</script>

<h1 class="mb-6">Login</h1>

{#if loading}
    loading...
{:else}
    <form class="text-sm text-gray-700">
        <label for="email">Email</label>
        <input class="field" type="email" placeholder="john@example.com" bind:value={email} id="email">

        <label for="password">Password</label>
        <input class="field" type="password" placeholder="**********" bind:value={password} id="password">

        <div class="flex justify-between">
            <span on:click={() => goto("/auth/signup")} class="text-blue-500 hover:underline cursor-pointer">Create Account</span>
            <span on:click={() => goto("/auth/signup")} class="text-blue-500 hover:underline cursor-pointer">Forgot Password?</span>    
        </div>

        <button on:click={() => handleLogin("credentials")} class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-md text-white mt-3" type="submit">Login</button>

        <Divider />
        
        <button on:click={() => handleLogin("google")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">Google</button>
        <button on:click={() => handleLogin("facebook")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">Facebook</button>
        <button on:click={() => handleLogin("github")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">GitHub</button>
    </form>
{/if}