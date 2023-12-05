<template>
    <MainLayout>
        <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
            <div class="mx-auto bg-white rounded-lg p-3">
                <div class="text-xl font-bold mb-2">Detalles de dirección</div>
                <form @submit.prevent="submit()">
                    <TextInput class="w-full" />
                </form>
            </div>
        </div>
        
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>
