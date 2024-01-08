<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
            <ul class=
            "flex 
            items-center 
            justify-end 
            text-xs 
            text-[#333] 
            font-light 
            px-2 
            h-10 
            bg-[#FAFAFA] 
            max-w-[1200px]"
            >
                <li class="border-r border-r-gray-400 px-3 hover:text-[#7841fa] cursor-pointer">
                    Vende en Furnimate
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#7841fa] cursor-pointer">
                    Acerca de nosotros
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#7841fa] cursor-pointer">
                    Terminos y Condiciones
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#7841fa] cursor-pointer">
                    Ayuda
                </li>
                <li class="px-3 hover:text-[#7841fa] cursor-pointer">
                    <Icon name="material-symbols:app-promo-sharp" size="17" />
                    App
                </li>
                <li
                    @mouseenter="isAccountMenu = true"
                    @mouseleave="isAccountMenu = false"
                    class="relative flex items-center px-2.5 hover:text-[#7841fa] h-full cursor-pointer"
                    :class="isAccountMenu ? 'bg-white border z-40 shadow':'border border-[#FAFAFA]'">
                    <Icon name="material-symbols:account-circle" size="17"/>
                    Cuenta
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="15" class="ml-5"/>

                    <div id="AccountMenu" v-if="isAccountMenu"
                    class="absolute bg-white w-[220px] text-[#333] z-40 top-[38px] -left-[100px] border-x border-b">
                        <div v-if="true">
                            <div class="text-semibold text-[15px] my-4 px-3">¡Bienvenido a Furnimate!</div>
                            <div class="flex items-center gap-1 px-3 mb-3">
                                <NuxtLink
                                to="/auth"
                                class="bg-[#7841fa] text-center w-full text-[16px] rounded-sm text-white font-semibold p-2 hover:bg-[#482796] transition ease-all"
                                >
                                    Entrar / Registrarse
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="border-b"/>
                        <ul class="bg-white">
                            <li
                            @click="navigateTo('/orders')"
                            class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 transition ease-all"
                            >
                                Mis ordenes
                            </li>
                            <li
                            v-if="true"
                            class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 transition ease-all"
                            >
                                Salir
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div 
        id="MainHeader"
        class="flex items-center w-full bg-white"
        >
            <div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
                <NuxtLink to="/" class="min-w-[170px]">
                    <img width="170" src="../src/textLogo.png">
                </NuxtLink>

                <div class="max-w-[700px] w-full md:block hidden">
                    <div class="relative">
                        <div class="flex items-center border-none w-full px-3 py-1 bg-[#d9d9d9] rounded-lg">
                            <input type="text"
                            class="w-full placeholder-neutral-600 text-sm bg-transparent focus:outline-none rounded-lg"
                            placeholder="Mueble de madera de pino"
                            v-model="searchItem"/>
                            <Icon name="line-md:loading-loop" size="25" v-if="isSearching" class="mr-2 ml-5"/>
                            <button class="flex items-center h-[100%] p-1.5 px-2 ">
                                <Icon name="streamline:magnifying-glass" size="20" color="#000"/>
                            </button>   
                        </div>
                        <div class="absolute bg-white max-w-[700px] h-auto w-full">
                            <div v-if="false" class="p-1">
                                <NuxtLink to="`/item/1`" class="flex items-center justify-between w-full cursor-pointer rounded-md hover:bg-gray-100">
                                    <div class="flex items-center">
                                        <img class="rounded-md" width="40" src="../src/images/mueble.jpg">
                                        <div class="truncate ml-2">PRUEBA</div>
                                    </div>
                                    <div class="truncate mr-2">$2000</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <NuxtLink
                to="/shoppingcart" class="flex items-center">
                    <button
                    class="relative md:block hidden"
                    @mouseenter="isCartHover = true"
                    @mouseleave="isCartHover= false">
                        <span
                        class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#7841fa] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full">
                            0
                        </span>
                        <div class="min-w-[40px]">
                            <Icon name="ph:shopping-cart-simple-bold" size="33"/>
                        </div>
                    </button>
                </NuxtLink>

                <button
                @click="userStore.isMenuOverlay=true"
                class="md:hidden block rounded-lg transition ease-all p-1.5 -mt-[4px] hover:bg-gray-200">
                    <Icon name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
                    size="33"/>

                </button>
            </div>
        </div>
    </div>

    <Loading v-if="userStore.isLoading"/>

    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]"/>
    <slot />

    <Footer v-if="!userStore.isLoading"/>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user.js'
const userStore = useUserStore()

    let isAccountMenu = ref(false)
    let isSearching = ref(false)
    let isCartHover = ref(false)
    let searchItem = ref('')
</script>
