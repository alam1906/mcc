<script lang='ts'>
	import { members } from "$lib/data/members";

</script>

<svelte:head>
	<title>Manonjaya Chess Club</title>
	<meta name="description" content="Manonjaya chess club MCC" />
</svelte:head>

<div class="max-w-6xl mx-auto">
    <div class="mx-5">
        <div class="text-center font-semibold text-2xl py-10 ">Daftar Anggota</div>
        <div class="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {#each members as item}
                <div class="w-full bg-white  pb-2 rounded-md">
                    <!-- image -->
                    <div class="aspect-2/3">
                        <img src="profile.avif" alt="profile.avif" class="w-full h-full object-cover rounded-t-md"> 
                    </div>
                    <!-- description -->
                    <div>
                        <div class="text-center font-semibold text-lg">{item.name}</div>
                        <div class="text-center font-medium text-gray-600">{item.role}</div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</div>