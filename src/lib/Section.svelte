<script lang="ts">
    import { scrollTo } from "svelte-scrollto"

    export let bgClass: string = ""
    export let overlayClass: string = ""

    export let paddingClass: string = "md:px-36 py-44"
    
    let classes: string = ""
    let sectionId: string = ""
    export { classes as class, sectionId as id}

    export let parallax: boolean = false

    let parallaxStyle: string[] = []
    const applyParallax = (e: MouseEvent) => {
        if (parallax) {
            let w = window.innerWidth/2;
            let h = window.innerHeight/2;
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            parallaxStyle = [`background-position: ${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%; background-size: 105%;`, `right: ${(mouseX - w) * 0.005}px; bottom: ${(mouseY - h) * 0.01}px;`];
        }
    }
</script>

<div on:mousemove={applyParallax} class="w-full {bgClass}" id={sectionId} style={parallaxStyle[0]}>
    <div class={overlayClass}>
        <div class="container relative {paddingClass} {classes}" style={parallaxStyle[1]}>
                <slot></slot>
        </div>

        <buttton on:click={() => { scrollTo({ element: "#uc" }) }} class="icon-scroll cursor-pointer"></buttton>
    </div>
</div>