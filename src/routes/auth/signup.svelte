<script lang="ts">
    import Banner from "$lib/Banner.svelte";
    import { goto } from "$app/navigation";

    import { supabase } from "../../lib/supabase/client";

    let loading = false

    let email = ""
    let password = ""
    let confirmPassword = ""

    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    let withLowercase = new RegExp("(?=.*[a-z])")
    let withUppercase = new RegExp("(?=.*[A-Z])")
    let withNumber = new RegExp("(?=.*[0-9])")
    let withSpecial = new RegExp("(?=.*[^A-Za-z0-9])")
    let withMinChars = new RegExp("(?=.{8,})")

    let hasLowercase = false
    let hasUppercase = false
    let hasNumber = false
    let hasSpecial  = false
    let hasMinChars = false

    let strongPassword = false

    function checkStrength(password: string) {
        if(withLowercase.test(password)) 
            hasLowercase = true
        else
            hasLowercase = false

        if(withUppercase.test(password)) 
            hasUppercase = true
        else
            hasUppercase = false

        if(withNumber.test(password)) 
            hasNumber = true
        else
            hasNumber = false

        if(withSpecial.test(password)) 
            hasSpecial = true
        else
            hasSpecial = false

        if(withMinChars.test(password)) 
            hasMinChars = true
        else
            hasMinChars = false

        strongPassword = hasLowercase && hasUppercase && hasNumber && hasSpecial && hasMinChars
    }


    const handleLogin = async () => {
        try {
            loading = true
            const { error: signUpError, session } = await supabase.auth.signUp({ email, password })
            if (signUpError) throw signUpError
        } catch (error: any) {
            alert(JSON.stringify(error))
        } finally {
            loading = false
        }
    }
</script>

<h1 class="mb-6">Create Account</h1>

<form class="text-sm text-gray-700">
    <label for="email">Email</label>
    <input class="field" type="email" placeholder="john@example.com" bind:value={email} id="email">

    <label for="password">Password</label>
    <input class="field" type="password" placeholder="**********" bind:value={password} on:input={() => checkStrength(password)} id="password">

    {#if password != ""}
        <Banner bannerType={strongPassword ? "success" : "error"}>
            <div class="flex items-center">
                <input type="checkbox" id="hasLowercase" checked={hasLowercase} disabled>
                <label class="ml-1" for="hasLowercase">Has a lowercase letter</label>
            </div>
            <div class="flex items-center">
                <input type="checkbox" id="hasUppercase" checked={hasUppercase} disabled>
                <label class="ml-1" for="hasUppercase">Has a uppercase letter</label>
            </div>
            <div class="flex items-center">
                <input type="checkbox" id="hasNumber" checked={hasNumber} disabled>
                <label class="ml-1" for="hasNumber">Has a number</label>
            </div>
            <div class="flex items-center">
                <input type="checkbox" id="hasSpecial" checked={hasSpecial} disabled>
                <label class="ml-1" for="hasSpecial">Has a special character </label>
            </div>
            <div class="flex items-center">
                <input type="checkbox" id="hasMinChars" checked={hasMinChars} disabled>
                <label class="ml-1" for="hasMinChars">Has minimum 8 characters</label>
            </div>
        </Banner>
    {/if}
    
    <label for="confirm">Confirm Password</label>
    <input class="field" type="password" placeholder="**********" bind:value={confirmPassword} id="confirm" disabled={!strongPassword}>
    {#if password != confirmPassword && strongPassword}
        <Banner bannerType="error">Passwords do not match!</Banner>
    {/if}

    <button on:click={handleLogin} class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-md text-white mt-3" type="submit" disabled={password != confirmPassword}>Create Account</button>

    <span on:click={() => goto("/auth/login")} class="text-blue-500 hover:underline cursor-pointer mt-3 block">Already have an account? Login</span>
</form>