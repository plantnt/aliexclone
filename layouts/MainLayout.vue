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
                    :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]':'border border-[#FAFAFA]'">
                    <Icon name="material-symbols:account-circle" size="17"/>
                    Account
                    <Icon name="material-symbols:keyboard-arrow-down-rounded" size="15" class="ml-5"/>
                </li>
        </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    let isAccountMenu = ref(false)
</script>
