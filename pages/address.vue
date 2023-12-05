<template>
    <MainLayout>
        <div id="AddressPage" class="mt-4 max-w-[500px] mx-auto px-2">
            <div class="mx-auto bg-white rounded-lg p-3">
                <div class="text-xl font-bold mb-2">Detalles de dirección</div>
                <form @submit.prevent="submit()">
                    <TextInput class="w-full" 
                               placeholder="Nombre de contacto" 
                               v-model:input="contactName" 
                               inputType="text" :error="error && error.type == 'contactName' ? error.message : ''"
                    />
                    <TextInput class="w-full mt-2" 
                               placeholder="Dirección" 
                               v-model:input="address" 
                               inputType="text" :error="error && error.type == 'address' ? error.message : ''"
                    />
                    <TextInput class="w-full mt-2" 
                               placeholder="Código postal" 
                               v-model:input="zipCode" 
                               inputType="text" :error="error && error.type == 'zipCode' ? error.message : ''"
                    />
                    <TextInput class="w-full mt-2" 
                               placeholder="Ciudad" 
                               v-model:input="city" 
                               inputType="text" :error="error && error.type == 'city' ? error.message : ''"
                    />
                    <TextInput class="w-full mt-2" 
                               placeholder="País" 
                               v-model:input="country" 
                               inputType="text" :error="error && error.type == 'country' ? error.message : ''"
                    />

                    <button :disabled="isWorking" type="submit" 
                            class="mt-6 w-full text-[21px] text-white font-semibold p-1.5 rounded-full bg-gradient-to-tl from-[#fc66ff] via-[#954fff] to-[#cb53ff] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
                    >
                        <div v-if="!isWorking">Actualizar dirección</div>
                        
                        
                    </button>
                </form>
            </div>
        </div>
        
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>
