<script lang="ts">
    export let ico: string;
</script>

{#if ico}
	<img src={ico} class="w-6 h-6 rounded-full mr-2" alt="" />
{/if}
