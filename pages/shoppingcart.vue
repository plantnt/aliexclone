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
            </div>
        </div>

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const products = [
    { id: 1, title: "Sillón gris de sala", description: "desc", url: "https://m.media-amazon.com/images/I/81IRC5sTOjL._AC_UF894,1000_QL80_.jpg", price: 1000 },
    { id: 2, title: "Sofá gris de sala", description: "desc", url: "https://cdn1.coppel.com/images/catalog/pm/4303953-1.jpg", price: 1000 }
]
</script>