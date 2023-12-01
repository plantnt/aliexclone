<template>
    <MainLayout>
        <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div v-if="false" class="h-[500px] flex items-center justify-center">
                <div class="pt-20">
                    <img class="mx-auto" width="250" src="../src/noitems.png">
                    <div class="text-3xl text-center mt-4">Aún no tienes productos en el carrito</div>
                    <div v-if="true" class="flex justify-center text-center">
                        <NuxtLink to="/auth"
                                  class="bg-[#7841fa] w-[200px] text-white text-[21px] font-semibold p-1.5 rounded-full mt-4 hover:bg-opacity-70 transition ease">
                            Iniciar sesión
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-bold mb-2">
                            Carrito de compras (0)
                        </div>
                    </div>
                    <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="product in products">
                            <CartItem :product="product" 
                                      :selectedArray="selectedArray" 
                                      @selectedRadio="slectedRadioFunc"
                            />

                        </div>
                    </div>
                </div>
                <div class="md:hidden block my-4"/>

                <div class="md:w-[35%]">
                    <div id="Summary" class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-bold mb-2">Resumen</div>
                        <div class="flex items-center justify-between my-4">
                            <div class="font-semibold">Total</div>
                            <div class="text-2xl font-semibold">
                                <span class="font-bold">${{ totalPriceComputed }}</span>
                            </div>
                        </div>
                        <button @click="goToCheckout"
                                class="px-6 py-2 rounded-full w-full text-white text-lg font-semibold bg-gradient-to-tl from-[#fc66ff] via-[#954fff] to-[#cb53ff] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 "
                                >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore()

let selectedArray = ref([])

onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 200)
})

const products = [
    { id: 1, title: "Sillón gris de sala", description: "desc", url: "https://m.media-amazon.com/images/I/81IRC5sTOjL._AC_UF894,1000_QL80_.jpg", price: 98898 },
    { id: 2, title: "Sofá gris de sala", description: "desc", url: "https://cdn1.coppel.com/images/catalog/pm/4303953-1.jpg", price: 197744 }
]

const totalPriceComputed = computed(() => {
    let price = 0
    userStore.cart.forEach(prod => {
        price += prod.price
    })
    return price / 100
})

const selectedRadioFunc = (e) => {
    if(!selectedArray.value.length){
        selectedArray.value.push(e)
        return
    }

    selectedArray.value.forEach((item, index) => {
        if(e.id != item.id){
            selectedArray.value.push(e)
        }
        else{
            selectedArray.value.splice(index, 1)
        }
    })
}

const goToCheckout = () => {
    let ids = []
    userStore.checkout = []
    selectedArray.value.forEach(item => ids.push(item.id));

    let res = userStore.cart.filter((item) => {
        return ids.indexOf(item.id) != -1
    })

    res.forEach(item => userStore.checkout.push(toRaw(item)))

    return navigateTo('/checkout')
}
</script>