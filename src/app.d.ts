/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare module "svelte-scrollto" {
	type easingFunc = (t: number) => number

	type optionFunc = (element: string, { x, y }: { x: number, y: number }) => void

	type Options = {
		element: string,
		container?: string,
		duration?: number,
		delay?: number,
		offset?: number,
		easing?: easingFunc,
		onStart?: optionFunc,
		onDone?: optionFunc,
		onAborting?: optionFunc,
		scrollX?: bool,
		scrollY?: bool
	};

	declare function scrollTo(options: Options): void
}