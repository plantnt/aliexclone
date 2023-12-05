<template>
    <div class="flex justify-start my-2">
        <img class="rounded-md md:w-[150px] w-[90px]" :src="product.url">

        <div class="overflow-hidden pl-2">
            <div class="flex items-center">
                        <span class="bg-[#7841fa] bg-opacity-80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm w-auto">Oferta inicial</span>
                        <div class="truncate pl-2">
                            {{ product.title }}
                        </div>
            </div>
    
            <div class="text-lg font-semibold mt-2">
                    $<span class="font-bold">{{ product.price / 100 }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['product'])
const { product } = toRefs(props)

</script>
