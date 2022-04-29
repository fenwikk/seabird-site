<script lang="ts">
    import underConstruction from "$lib/assets/under-construction.svg"

    import Section from "$lib/Section.svelte"

    let open = false
</script>

<svelte:head>
    <title>Seabird Digital | Modern webbdesign till ett bra pris nära Göteborg</title>
</svelte:head>

<div class="absolute w-full top-10 z-50">
    <div class="container flex justify-between items-center">
        <div class="text-white font-mulish tracking-tighter text-4xl font-thin">
            sea<span class="font-bold">bird<span class="text-sb-orange">.</span></span>
        </div>
        <div class="">
            <ul class="flex justify-end items-center text-white text-xl font-mulish font-thin">
                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-sb-orange hover:pt-[8px] hover:pb-1 duration-150">Tjänster</li>
                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-sb-orange hover:pt-[8px] hover:pb-1 duration-150">Vilka vi är</li>
                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-sb-orange hover:pt-[8px] hover:pb-1 duration-150">Kunskapsbank</li>

                <span class="h-8 w-[1px] bg-white mx-4" />

                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-sb-orange hover:pt-[8px] hover:pb-1 duration-150">Logga in</li>

                <button class="bg-sb-orange rounded-full py-[10px] p-7 ml-2 hover:bg-white hover:text-sb-orange duration-150">Kontakt</button>
            </ul>
        </div>
    </div>
</div>

<Section bgClass="bg-hero" overlayClass="bg-sb-black/70" class="flex justify-center items-center h-screen relative" parallax>
    <h1>
        <span class="font-quicksand text-white text-2xl font-normal relative top-11 left-4">Modern</span><br>
        <span class="font-brush text-white text-9xl font-normal">webbdesign</span><br>
        <span class="font-scope text-white text-4xl font-thin relative bottom-7 left-12">till ett bra pris</span>
    </h1>
</Section>

<Section id="uc" class="flex flex-col items-center">
    <img class="h-56 w-[22rem] mb-8" src={underConstruction} alt="Two people building a house">
    <h2 class="text-sb-black/75">Våran sida är under konstruktion</h2>
    <p class="text-sb-black/50">Vi jobbar med det för att ge dig den bästa upplevelsen!</p>
</Section>