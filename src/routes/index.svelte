<script lang="ts">
    import underConstruction from "$lib/assets/under-construction.svg"

    import Section from "$lib/Section.svelte"

    let open = false

    let y = 0
</script>

<svelte:head>
    <title>Seabird Digital | Modern webbdesign till ett bra pris nära Göteborg</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<div class="absolute w-full top-20 z-50">
    <div class="container flex justify-between items-center">
        <div class="font-specify text-4xl font-thin relative">
            <div class="absolute -top-[175px] -left-[125px] -z-10">
                <svg class="absolute" width="500" height="405" viewBox="0 0 500 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M228.095 349.303C274.265 341.242 298.154 303.613 335.038 279.104C381.244 248.401 471.907 239.111 467.875 189.975C463.769 139.931 373.321 137.549 321.346 112.256C290.13 97.0647 263.152 80.634 228.095 73.2875C175.433 62.2515 116.35 33.6985 72.1978 60.0439C26.8736 87.0884 33.8851 143.53 32.5379 189.975C31.1416 238.107 23.1634 292.687 64.4728 326.344C105.588 359.842 171.82 359.128 228.095 349.303Z" fill="#F2C94C"/>
                </svg>
                <svg class="absolute" style="top: {y * -.1}px;" width="500" height="405" viewBox="0 0 500 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M192.447 339.466C239.177 343.051 271.616 312.483 313.408 297.838C365.763 279.49 455.914 292.867 464.136 244.256C472.509 194.746 385.448 170.112 341.325 132.772C314.825 110.346 292.737 87.7643 260.579 71.9917C212.27 48.2979 162.064 6.04454 112.774 20.6761C62.177 35.6958 55.0394 92.1219 42.2695 136.797C29.0354 183.095 7.83144 234.017 39.5548 276.829C71.1289 319.439 135.488 335.096 192.447 339.466Z" stroke="black" stroke-width="7"/>
                </svg>
            </div>

            seabird
        </div>

        <div class="">
            <ul class="flex justify-end items-center text-black text-xl font-mulish font-medium relative">
                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-black hover:pt-[8px] hover:pb-1 duration-150">Tjänster</li>
                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-black hover:pt-[8px] hover:pb-1 duration-150">Vilka vi är</li>
                <li class="cursor-pointer mx-2 border-b-4 border-transparent pt-1 hover:border-black hover:pt-[8px] hover:pb-1 duration-150">Kunskapsbank</li>

                <li class="cursor-pointer ml-16 mr-2 border-b-4 border-transparent pt-1 hover:border-black hover:pt-[8px] hover:pb-1 duration-150">Logga in</li>

                <button class="px-6 py-3 ml-2 border-4 -rotate-2 hover:rotate-0 border-black hard-shadow bg-yellow-400">Kontakt</button>

                <div class="-z-10 absolute -right-[150px] -top-[125px] w-[400px] h-[250px] bg-emerald-500"/>
                <div class="-z-10 absolute -right-[150px] -top-[125px] w-[400px] h-[250px] border-8 border-black" style="transform: rotate({10 + y * .036}deg);"/>
            </ul>
        </div>
    </div>
</div>

<Section class="flex flex-col justify-center items-center h-screen relative">
    <h1 class="font-paytone text-center text-6xl mb-6">Vi skapar moderna sidor<br>utan att skada din plånbok</h1>
    <p class="font-mulish font-bold text-xl text-center mb-6">Att se bra ut online ska inte kosta en förmögenhet.<br>Kontakta oss idag för att få eran nya makeover!</p>

    <button class="px-8 py-4 text-xl font-mulish font-bold border-4 rotate-2 hover:rotate-0 border-black hard-shadow bg-red-400">Kontakt</button>
    
    <div class="absolute -left-[150px] -bottom-[150px] -rotate-[17deg] w-[550px] h-[450px] bg-sky-400"/>
    <div class="absolute -left-[150px] w-[550px] h-[450px] border-4 border-black" style="bottom: {y * -.01 - 150}px;transform: rotate({-26 + y * -.01}deg);"/>

    <div class="absolute top-[35%] right-[40%] -z-10">
        <svg class="absolute" width="465" height="479" viewBox="0 0 465 479" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-orange-400" fill-rule="evenodd" clip-rule="evenodd" d="M186.598 386.242C148.11 378.638 103.221 405.132 70.9566 382.811C39.6846 361.177 26.8192 316.087 30.4783 278.238C34.0292 241.508 69.8846 218.079 89.8804 187.066C104.971 163.66 117.355 140.135 133.943 117.765C154.881 89.5286 166.703 48.4305 200.315 38.1386C233.502 27.9767 266.708 53.2368 298.39 67.4118C327.856 80.5955 356.393 95.0145 378.981 118.077C402.548 142.14 429.603 169.078 430.926 202.733C432.245 236.273 401.206 261.008 385.773 290.815C372.654 316.153 365.29 343.676 346.73 365.347C326.094 389.441 304.28 418.592 272.823 422.697C241.345 426.804 217.742 392.396 186.598 386.242Z"/>
        </svg>
        <svg class="absolute" style="transform: rotate({y * -.036}deg);" width="465" height="479" viewBox="0 0 465 479" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="stroke-black stroke-2" fill-rule="evenodd" clip-rule="evenodd" d="M218.747 392.569C179.521 393.28 141.255 428.673 104.998 413.685C69.8562 399.157 47.7413 357.811 43.3088 320.044C39.0075 283.395 69.0936 252.909 82.0744 218.367C91.8709 192.298 98.9965 166.685 110.475 141.312C124.965 109.285 127.823 66.6156 158.496 49.4445C188.782 32.4904 226.581 50.1523 260.545 57.3026C292.133 63.9529 323.075 72.0072 350.031 89.7679C378.157 108.299 410.299 128.903 418.713 161.516C427.099 194.017 401.997 224.76 393.22 257.158C385.759 284.698 384.386 313.156 370.832 338.264C355.762 366.179 340.609 399.285 310.733 409.953C280.836 420.628 250.488 391.993 218.747 392.569Z"/>
        </svg>
    </div>
</Section>


<Section id="uc" class="flex flex-col items-center">
    <svg class="h-96" viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g transform="translate(179.87784004211426, 13.305374145507812)">
            <path class="blob" fill="#F87171">
                <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"

                    values="
                    M408,319Q414,388,348,409Q282,430,209.5,437.5Q137,445,111.5,377.5Q86,310,89.5,251.5Q93,193,116,125Q139,57,210,65.5Q281,74,323,114Q365,154,383.5,202Q402,250,408,319Z;
                    
                    M445.5,327.5Q434,405,357.5,415Q281,425,212,430.5Q143,436,100.5,378Q58,320,89,261.5Q120,203,144.5,156Q169,109,228.5,72Q288,35,334,88Q380,141,418.5,195.5Q457,250,445.5,327.5Z;
                    
                    M460.5,322Q422,394,351,407Q280,420,233,390.5Q186,361,137.5,335Q89,309,74,245Q59,181,121,158Q183,135,236,82.5Q289,30,363.5,61Q438,92,468.5,171Q499,250,460.5,322Z;
                    
                    M414,326.5Q432,403,352.5,392.5Q273,382,208.5,407.5Q144,433,87,381.5Q30,330,23.5,247.5Q17,165,83.5,121.5Q150,78,218,63Q286,48,358,73.5Q430,99,413,174.5Q396,250,414,326.5Z;
                    
                    M408,319Q414,388,348,409Q282,430,209.5,437.5Q137,445,111.5,377.5Q86,310,89.5,251.5Q93,193,116,125Q139,57,210,65.5Q281,74,323,114Q365,154,383.5,202Q402,250,408,319Z;"
                />
            </path>
        </g>
        <g transform="translate(179.87784004211426, 13.305374145507812)">
            <path class="border-black stroke-2">
                <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"

                    values="
                    M218.747 392.569C179.521 393.28 141.255 428.673 104.998 413.685C69.8562 399.157 47.7413 357.811 43.3088 320.044C39.0075 283.395 69.0936 252.909 82.0744 218.367C91.8709 192.298 98.9965 166.685 110.475 141.312C124.965 109.285 127.823 66.6156 158.496 49.4445C188.782 32.4904 226.581 50.1523 260.545 57.3026C292.133 63.9529 323.075 72.0072 350.031 89.7679C378.157 108.299 410.299 128.903 418.713 161.516C427.099 194.017 401.997 224.76 393.22 257.158C385.759 284.698 384.386 313.156 370.832 338.264C355.762 366.179 340.609 399.285 310.733 409.953C280.836 420.628 250.488 391.993 218.747 392.569Z
                    M445.5,327.5Q434,405,357.5,415Q281,425,212,430.5Q143,436,100.5,378Q58,320,89,261.5Q120,203,144.5,156Q169,109,228.5,72Q288,35,334,88Q380,141,418.5,195.5Q457,250,445.5,327.5Z;
                    
                    M460.5,322Q422,394,351,407Q280,420,233,390.5Q186,361,137.5,335Q89,309,74,245Q59,181,121,158Q183,135,236,82.5Q289,30,363.5,61Q438,92,468.5,171Q499,250,460.5,322Z;
                    
                    M414,326.5Q432,403,352.5,392.5Q273,382,208.5,407.5Q144,433,87,381.5Q30,330,23.5,247.5Q17,165,83.5,121.5Q150,78,218,63Q286,48,358,73.5Q430,99,413,174.5Q396,250,414,326.5Z;
                    
                    M408,319Q414,388,348,409Q282,430,209.5,437.5Q137,445,111.5,377.5Q86,310,89.5,251.5Q93,193,116,125Q139,57,210,65.5Q281,74,323,114Q365,154,383.5,202Q402,250,408,319Z;
                    
                    M445.5,327.5Q434,405,357.5,415Q281,425,212,430.5Q143,436,100.5,378Q58,320,89,261.5Q120,203,144.5,156Q169,109,228.5,72Q288,35,334,88Q380,141,418.5,195.5Q457,250,445.5,327.5Z;"
                />
            </path>
        </g>
    </svg>

    <h2 class="text-sb-black/75">Vår sida är under konstruktion</h2>
    <p class="text-sb-black/50">Vi jobbar med det för att ge dig den bästa upplevelsen!</p>
</Section> 