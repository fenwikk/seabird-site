<script>
    import { goto } from "$app/navigation";
</script>
<h1 class="mb-6">Login Success</h1>

<button on:click={() => goto("/settings")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">Settings</button>
<button on:click={() => goto("/analytics")} class="w-full py-3 border-[1px] border-gray-300 hover:bg-gray-100 rounded-md mb-3">Analytics</button>
<button on:click={() => goto("/")} class="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 rounded-md text-white mb-3">Go to Dashboard</button>
