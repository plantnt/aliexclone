<template>
    <MainLayout>
        <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4">
                        <div class="text-xl font-semibold mb-2">
                            Dirección de entrega
                        </div>
                        <div v-if="false">
                            <NuxtLink to="/address" class="flex items-center pb-2 text-[#EF8686] hover:text-[#7841fa] transition-all">
                                <Icon name="material-symbols:add-circle-outline" size="18" class="mr-2"/>
                                Añadir dirección
                            </NuxtLink>

                            <div class="pt-2 border-t">
                                <ul class="text-xs">
                                    <li class="flex items-center gap-2">
                                        <div>Nombre:</div>
                                        <div class="font-bold">TEST</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Dirección:</div>
                                        <div class="font-bold">TEST</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Código postal:</div>
                                        <div class="font-bold">TEST</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>Ciudad:</div>
                                        <div class="font-bold">TEST</div>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <div>País:</div>
                                        <div class="font-bold">TEST</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <NuxtLink v-else to="/address"
                                  class="flex items-center pb-2 text-[#EF8686] hover:text-[#7841fa] transition-all"
                        >
                            <Icon name="material-symbols:add-circle-outline" size="18" class="mr-2"/>
                            Añadir dirección
                        </NuxtLink>
                    </div>
                    <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="product in products">
                            <CheckoutItem :product="product"/>
                        </div>
                    </div>
                </div>

                <div class="md:hidden block my-4"/>

                <div class="md:w-[65%]">
                    <div id="PlaceOrder" class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-bold mb-2">Resumen</div>

                        <div class="border-t"/>

                        <div class="flex items-center justify-between my-4">
                            <div class="font-semibold">Total</div>
                            <div class="text-2xl font-semibold">
                                <span class="font-bold">${{ total / 100 }}</span>
                            </div>
                        </div>

                        <form @submit.prevent="pay()">
                            <div id="card-element" class="border border-gray-500 p-2 rounded-sm"/>

                            <p id="card-error" role="alert" class="text-red-700 text-center font-semibold"/>

                            <button :disabled="isProcessing" type="submit"
                                    class="mt-4 w-full text-white text-[21px] font-semibold p-1.5 rounded-full bg-gradient-to-tl from-[#fc66ff] via-[#954fff] to-[#cb53ff] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
                                    :class="isProcessing ? 'opacity-70' : 'opacity-100'"
                            >
                                <Icon v-if="isProcessing" name="line-md:loading-loop"/>
                                <div v-else>Place order</div>
                            </button>
                        </form>
                    </div>
                    <div class="bg-white rounded-lg p-4 mt-4">
                        <div class="text-lg font-semibold mb-2 mt-2"><Icon name="ant-design:safety-outlined" size="20" class="mr-1"/>Furnimate</div>
                        <p class="flex items-center my-2">Tus datos están seguros con Furnimate</p>
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
const route = useRoute()

let stripe = null
let elements = null
let card = null
let form = null
let total = ref(0)
let clientSecret = null
let currentAddress = ref(null)
let isProcessing = ref(false)


onMounted(() => {
    isProcessing = true

    userStore.checkout.forEach(item => {
        total.value += item.price
    })
})

watch(() => total.value, () => {
    if(total.value > 0){
        stripeInit()
    }
})

const stripeInit = async () => {
    
}

const pay = async () => {

}
const createOrder = async (stripeId) => {

}
const showError = async (errorMsgText) => {

}

const products = [
    { id: 1, title: "Sillón gris de sala", description: "desc", url: "https://m.media-amazon.com/images/I/81IRC5sTOjL._AC_UF894,1000_QL80_.jpg", price: 98898 },
    { id: 2, title: "Sofá gris de sala", description: "desc", url: "https://cdn1.coppel.com/images/catalog/pm/4303953-1.jpg", price: 197744 }
]

</script>