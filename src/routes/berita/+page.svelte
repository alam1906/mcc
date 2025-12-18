<script lang='ts'>
	import { getNews } from "$lib/api/news";
	import { news } from "$lib/data/news";
</script>

<svelte:head>
	<title>Manonjaya Chess Club</title>
	<meta name="description" content="Manonjaya chess club MCC" />
</svelte:head>

<div>
    <div class="py-10 max-w-6xl mx-auto ">
        <div class="mx-5">
            <!-- title -->
            <div class="text-center text-2xl font-semibold mb-10">Berita </div>

            <!-- content news -->
             <div class="grid min-[450px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
                <svelte:boundary>
                    {#each await getNews() as item}
                    <div class="flex flex-col bg-white rounded-md cursor-pointer">
                        <!-- image -->
                        <img src="banner.avif" alt="banner" class="object-cover aspect-video rounded-t-md">

                        <!-- content -->
                            <div class="p-2">
                                <!-- title -->
                                <div class="line-clamp-3 text-lg font-semibold mt-0.5 mb-1">{item.title}</div>
                                <!-- date -->
                                <div class="flex justify-between">
                                    <div class="text-gray-600 text-sm font-medium">{item.date}</div>
                                    <div class="text-gray-600 text-sm font-medium">admin</div>
                                </div>
                            </div>
                    </div>
                    {/each}

                    {#snippet pending()}
                        <div class="">Loading...</div>
                    {/snippet}
                </svelte:boundary>
             </div> 
        </div>
     </div>
</div>