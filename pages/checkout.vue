<template>
    <MainLayout>
        <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4">
                        
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