<script lang="ts">
	import { supabase } from '$lib/supabase/client';

    let sent = false
    let loading = false;
	let email = '';

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email }, { redirectTo: location.href});
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error: any) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}

        sent = true
	};
</script>


{#if !sent}
    <form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
        <div class="col-6 form-widget">
            <h1 class="header">Supabase + Svelte</h1>
            <p class="description">Sign in via magic link with your email below</p>
            <div>
                <input class="field" type="email" placeholder="Your email" bind:value={email} />
            </div>
            <div>
                <input
                    type="submit"
                    class="button block"
                    value={loading ? 'Loading' : 'Send magic link'}
                    disabled={loading}
                />
            </div>
        </div>
    </form>
{:else}
    <h1>Sucess</h1>
    
    <p>Email has been sent to {email}</p>
    <a href="https://{email.split("@")[1]}">Go to {email.split("@")[1]}</a>
    <button on:click={() => sent = false}>Change email</button>
{/if}