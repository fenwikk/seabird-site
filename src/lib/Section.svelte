<script lang="ts">
    export let bgClass: string = ""
    export let overlayClass: string = ""

    export let paddingClass: string = "md:px-36 py-44"
    
    let classes: string = ""
    export { classes as class}
</script>

<div class="w-full {bgClass}">
    <div class={overlayClass}>
        <div class="container {paddingClass} {classes}">
            <slot></slot>
        </div>
    </div>
</div>