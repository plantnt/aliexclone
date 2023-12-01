<template>
    <div class="flex justify-start my-2">
        <div class="my-auto">
            <div @mouseenter="isHover = true"
                 @mouseleave="isHover = false"
                 class="flex items-center justify-start p-0.5 cursor-pointer"
            >
                <div @click="isSelected = !isSelected"
                     class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
                     :class="[isHover ? 'border-[#7841fa] border-[2px] transition-all' : 'border-gray-300', isSelected ? 'bg-[#7841fa]' : '']"
                >
                    <div class="h-[8px] w-[8px] rounded-full bg-white"/>
                </div>
            </div>
        </div>
        <img class="rounded-md md:w-[150px] w-[90px]" :src="product.url">
        <div class="overflow-hidden pl-2 w-full">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center justify-between truncate">
                    <span class="sm:block hidden bg-[#7841fa] bg-opacity-80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm w-auto">Oferta inicial</span>
                    <div class="truncate sm:pl-2">
                        {{ product.title }}
                    </div>
                </div>

                <button @click="removeFromCart()"
                        class="mx-2 w-9 sm:block hidden items-center justify-center p-1 pb-2 rounded-full bg-slate-600 text-white hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                    <Icon name="material-symbols:delete-forever-outline-rounded" size="20"/>        
                </button>
            </div>
            <div class="text-xl font-semibold">
                $<span class="font-bold">{{ product.price / 100 }}</span>
            </div>
            <div class="flex items-center justify-end">
                <button @click="removeFromCart()"
                        class="w-9 sm:hidden block p-1 pb-2 rounded-full bg-slate-600 text-white hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                    <Icon name="material-symbols:delete-forever-outline-rounded" size="20"/>        
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore() 

const props = defineProps(['product', 'selectedArray'])
const { product, selectedArray } = toRefs(props)

const emit = defineEmits(['selectedRadio'])

let isHover = ref(false)
let isSelected = ref(false)

const removeFromCart = () => {
    userStore.cart.forEach((prod, index) => {
        if(prod.id === product.value.id){
            userStore.cart.splice(index, 1)
        }
    })
}

watch(() => isSelected.value, (val) => {
    emit('selectedRadio', { id: product.value.id, val: val })
})

</script>
