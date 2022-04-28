<script lang="ts">
    import underConstruction from "$lib/assets/under-construction.svg"

    import Section from "$lib/Section.svelte"
    import { Hamburger } from "svelte-hamburgers"

    let open = false
</script>

<svelte:head>
    <title>Seabird Digital | Modern webbdesign till ett bra pris nära Göteborg</title>
</svelte:head>

<div class="absolute w-full top-6">
    <div class="container flex justify-between">
        <div class="text-white font-mulish tracking-tighter text-3xl font-thin">sea<span class="font-bold">bird</span></div>
        <div>
            <Hamburger bind:open type="arrowturn-r" --border-radius="4px" --layer-width="40px" --layer-height="4px" --color="white" />
        </div>
    </div>
</div>

<Section bgClass="bg-hero bg-cover" overlayClass="bg-sb-dark-blue/60">
    <h1>
        <span class="font-mulish text-white text-2xl font-normal relative top-8">Modern</span><br>
        <span class="font-brush text-white text-8xl font-normal">webbdesign</span><br>
        <span class="font-mulish text-white text-[37px] font-thin relative bottom-6">till ett bra pris</span>
    </h1>
    <p class="font-roboto text-white lg:w-[485px]">38% av alla användare lämnar en sida de tycker ser gammal ut och 95% dömer hela företaget efter deras hemsida. Vi ger dig en modern hemsida utan att bränna hål på din plånbok</p>
</Section>

<Section class="flex flex-col justify-center">
    <img class="h-56 mb-8" src={underConstruction} alt="Two people building a house">
    <h2 class="text-center text-sb-black/75">Våran sida är under konstruktion</h2>
    <p class="text-center text-sb-black/50">Vi jobbar med det för att ge dig den bästa upplevelsen!</p>
</Section>