<script lang='ts'>
	import { members } from "$lib/data/members";

</script>

<div class="max-w-6xl mx-auto">
    <div class="mx-5">
        <div class="text-center font-semibold text-2xl py-16 underline underline-offset-8">Daftar Anggota</div>
        <div class="grid grid-cols-4 gap-6 mb-20">
            {#each members as item}
                <div class="w-full bg-white  pb-2 rounded-md">
                    <!-- image -->
                    <img src="profile.avif" alt="profile.avif" class="aspect-3/4 object-cover rounded-t-md">
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