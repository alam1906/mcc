<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X } from '@lucide/svelte';
	import { menus } from '$lib/data/menus';
	import { slide } from 'svelte/transition';
	import { MediaQuery } from 'svelte/reactivity';

	const desktop = $derived(new MediaQuery('max-width: 640px').current);

	let isOpen = $state(true);
</script>

<div class={`sticky top-0 z-50 w-full bg-white ${isOpen ? '' : 'shadow-md'}`}>
	<div class="mx-auto max-w-6xl">
		<div class="mx-5">
			<div class="flex h-20 items-center justify-between">
				<!-- logo -->
				<div class="font-serif text-xl font-semibold max-[450px]:hidden">MANONJAYA CHESS CLUB</div>
				<div class="font-serif text-xl font-semibold max-[450px]:block hidden">MCC</div>

				<!-- navbar desktop -->
				<div class="hidden items-center gap-x-10 md:flex">
					{#each menus as item}
						<a
							href={item.path}
							class={`${page.url.pathname === item.path ? 'text-blue-600' : ''}  font-semibold`}
							>{item.name}</a
						>
					{/each}
				</div>

				<!-- trigger button -->
				<button
					onclick={() => {
						isOpen = !isOpen;
					}}
					class="cursor-pointer md:hidden"
				>
					{#if isOpen && desktop}
						<X />
					{:else}
						<Menu />
					{/if}
				</button>
			</div>
		</div>
		<!-- mobile -->
	</div>
	{#if isOpen}
		<div
			transition:slide={{ duration: 300 }}
			class="absolute top-20 w-full bg-white shadow-md md:hidden"
		>
			<div class="flex w-full flex-col items-center justify-center">
				{#each menus as item}
					<a
						href={item.path}
						class={`w-full py-5 text-center font-semibold ${page.url.pathname === item.path ? 'text-blue-600' : ''}`}
						>{item.name}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</div>
