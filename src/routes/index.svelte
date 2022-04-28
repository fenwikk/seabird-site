<script lang="ts">
    import Section from "$lib/Section.svelte"
    import { Hamburger } from "svelte-hamburgers"

    let open = false
</script>

<div class="absolute w-full top-6">
    <div class="container flex justify-between">
        <div class="text-white font-mulish tracking-tighter text-3xl font-bold">seabird</div>
        <div>
            <Hamburger bind:open type="arrowturn-r" --border-radius="4px" --layer-width="40px" --layer-height="4px" --color="white" />
        </div>
    </div>
</div>

<Section bgClass="bg-hero bg-cover" overlayClass="bg-sb-dark-blue/60">
    <h1>
        <span class="font-mulish text-white text-2xl relative top-8">Modern</span><br>
        <span class="font-brush text-white text-8xl font-normal">webbdesign</span><br>
        <span class="font-mulish text-white text-[37px] font-thin relative bottom-4">till ett bra pris</span>
    </h1>
    <p class="font-roboto text-white lg:w-[485px]">38% av alla användare lämnar en sida de tycker ser gammal ut och 95% dömer hela företaget efter deras hemsida. Vi ger dig en modern hemsida utan att bränna hål på din plånbok</p>
</Section>

<div>
    
</div>