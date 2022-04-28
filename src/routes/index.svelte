<script lang="ts">
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

<div class="w-full bg-hero bg-cover">
    <div class="bg-sb-dark-blue/60 py-56">
        <div class="container px-36">
            <h1 class="font-oswald text-white text-6xl font-extrabold mb-3">Modern webb design<br/>till ett bra pris</h1>
            <p class="font-roboto text-white w-[55%]">38% av alla användare lämnar en sida de tycker ser gammal ut och 95% dömer hela företaget efter deras hemsida. Vi ger dig en modern hemsida utan att bränna hål på din plånbok</p>
        </div>
    </div>
</div>