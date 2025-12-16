<script lang='ts'>
    import { menus } from '$lib/data/menus';
import {MapPin, Phone, Mail, Instagram, Facebook, Youtube} from '@lucide/svelte'
</script>

<div class="md:py-20 py-10 bg-slate-900 text-white">
    <div class="max-w-6xl mx-auto">
        <div class="mx-5">
            <div class="flex flex-col md:flex-row gap-y-8">
                {@render secretariat()}
                {@render socialMedia()}
                {@render information()}
            </div>
        </div>
    </div>
</div>

{#snippet secretariat()}
        <div class="md:w-1/3 w-full">
            <!-- title -->
            <div class="text-2xl font-semibold md:mb-5 mb-3">Sekretariat</div>
            <!-- content -->
            <div class="space-y-5">
                <div class="flex gap-x-2 items-center ">
                    <MapPin size="32"/>
                    <div>Depan Kantor Pos, Jl. Prawira Adiningrat, Kec. Manonjaya, Kab. Tasikmalaya</div>
                </div>
                <div class="flex gap-x-2 items-center ">
                    <Phone size="20"/>
                    <div>081222333444</div>
                </div>
                <div class="flex gap-x-2 items-center ">
                    <Mail size="20"/>
                    <div>percasimanonjaya@gmail.com</div>
                </div>
            </div>  
        </div>
{/snippet}

{#snippet socialMedia()}
        <div class="md:w-1/3 w-full md:pl-10">
                <!-- title -->
                <div class="text-2xl font-semibold md:mb-5 mb-3">Social Media</div>
                <!-- content -->
                <div class="space-y-5">
                    <div class="flex gap-x-2 items-center ">
                        <Instagram size="20"/>
                        <div>Instagram</div>
                    </div>
                    <div class="flex gap-x-2 items-center ">
                        <Facebook size="20"/>
                        <div>Facebook</div>
                    </div>
                    <div class="flex gap-x-2 items-center ">
                        <Youtube size="20"/>
                        <div>Youtube</div>
                    </div>
                </div>  
        </div>
{/snippet}

{#snippet information()}
        <div class="md:w-1/3 w-full ">
                <!-- title -->
                <div class="text-2xl font-semibold md:mb-5 mb-3">Sekretariat</div>
                <!-- content -->
                
                <div class="flex flex-col gap-y-2 ">
                    {#each menus as menu}
                        <div class="cursor-pointer">{menu.name}</div>
                    {/each}
                </div>
        </div>
{/snippet}