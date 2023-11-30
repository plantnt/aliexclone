<template>
    <MainLayout>
        <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div v-if="true" class="h-[500px] flex items-center justify-center">
                <div class="pt-20">
                    <img class="mx-auto" width="250" src="../src/noitems.png">
                    <div class="text-3xl text-center mt-4">Aún no tienes productos en el carrito</div>
                    <div v-if="true" class="flex text-center">
                        <NuxtLink to="/auth"
                                  class="bg-[#7841fa] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4 hover:bg-opacity-50 transition ease">
                            Iniciar sesión
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>