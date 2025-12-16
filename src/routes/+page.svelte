<script lang="ts">
</script>

<div>
    {@render banner()}
    {@render aboutUs()}
    {@render news()}
</div>

{#snippet banner()}
    <div class="h-[calc(100dvh-80px)]">
        <img src="banner.avif" alt="banner" class="h-full w-full brightness-50">
    </div>
{/snippet}

{#snippet aboutUs()}
    <div class="bg-white">
        <div class="py-20 max-w-6xl mx-auto ">
        <div class="mx-5">
            <!-- title -->
            <div class="text-center text-2xl font-semibold underline-offset-8 underline mb-20">About Us</div>

        <!-- content -->
         <div class="flex flex-col md:flex-row">
            <!-- image -->
            <div class="md:w-1/2 w-full flex justify-center">
                <img src="profile.avif" alt="profile" class="w-3/4 aspect-5/6 rounded-md">
            </div>
            
            <!-- description -->
           <div class="md:w-1/2 w-full flex justify-center flex-col mt-10 md:mt-0">
                <div class="text-3xl mb-1 font-semibold font-serif">Dr. Asep Nursyamsi</div>
                <div class="text-xl mb-5 font-semibold text-gray-700 ">Ketua MCC</div>
                <div class="text-gray-600 ">Percasi Kecamatan Manonjaya berkomitmen untuk meningkatkan kualitas pembinaan atlet serta penyelenggaraan turnamen yang menjadi agenda rutin. Kemudian, juga akan melaksanakan kepelatihan Pelatih, wasit dan lainnya. <br><br>Tahun ini akan menjadi tonggak baru bagi Percasi Kec. Manonjaya dalam melakukan pemantapan pembinaan, mulai dari daerah. Percasi Kec. Manonjaya pun bertekad menggairahkan kembali daerah, dimulai dari pemantapan kepengurusan dan program kerja masing-masing</div>
           </div>
         </div>
        </div>
        </div>
    </div>
{/snippet}

{#snippet news()}
    <div class="bg-gray-100">
        <div class="py-20 max-w-6xl mx-auto ">
        <div class="mx-5">
            <!-- title -->
            <div class="text-center text-2xl font-semibold underline-offset-8 underline mb-20">Berita Terbaru</div>

            <!-- content news -->
             <div class="grid min-[450px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
                {#each Array(4) as news}
                    <div class="flex flex-col bg-white rounded-md cursor-pointer">
                        <!-- image -->
                        <img src="banner.avif" alt="banner" class="rounded-t-md">

                        <!-- content -->
                            <div class="p-2">
                                <!-- title -->
                                <div class="line-clamp-3 text-lg font-semibold mt-0.5 mb-1">Manonjaya Chess Club kembali mengadakan turnamen untuk merayakan kemerdekaan Indonesia</div>
                                <!-- date -->
                                <div class="flex justify-between">
                                    <div class="text-gray-600 text-sm font-medium">10 Oktober 2020</div>
                                    <div class="text-gray-600 text-sm font-medium">admin</div>
                                </div>
                            </div>
                    </div>
                {/each}

             </div> 
        </div>
     </div>
     </div>
{/snippet}