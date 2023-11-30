<template>
    <div
    :id="`ProductComponent${product.id}`" 
    class="bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] transition ease-all cursor-pointer">
    <NuxtLink :to="`/item/${product.id}`">
        <img class="rounded-t" :src="product.url">
        <div id="ProductDetails">
            <div class="flex item-center gap-1 px-1 relative top-1">
                <span class="bg-[#7841fa] bg-opacity-0 text-white text-[9px] font-semibold px-1.5 rounded-sm">
                    Oferta inicial
                </span>
                <span class="bg-white border text-[#7841fa] text-[9px] font-semibold px-1.5 rounded-sm">
                    Más vendido
                </span>
            </div>
            <span class="flex items-center justify-start gap-3 px-1 pt-1">
                <span class="text-black text-xl font-semibold">${{ priceComputed }}</span>
                <span class="text-gray-500 text-sm text-light line-through">${{ oldPriceComputed }}</span>
            </span>
                <span class="px-1 relative -top-1.5 text-[#d13434] text-xs font-semibold">
                    Descuento de 5%
                </span>
                
                <p class="px-1 mb-1 text-md font-semibold text-black">
                    {{ product.title.substring(0,60) }}
                </p>
                
                <p class="text-xs mb-1">
                    <Icon name="ic:baseline-star" color="757575" class="ml-1 mb-1" size="15"/> 4.6
                </p>

            </div>
        </NuxtLink>

    </div>
</template>

<script setup>
const props = defineProps(['product'])
const {product} = toRefs(props)

const priceComputed = computed(() => {
    return product.value.price / 100
})

const oldPriceComputed = computed(() => {
    let res = (product.value.price + (product.value.price / 10)) / 100
    return res.toFixed(2)
})
</script>
