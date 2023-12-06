<template>
    <MainLayout>
        <div id="AddressPage" class="mt-4 max-w-[900px] mx-auto px-2">
            <div class="mx-auto bg-white rounded-lg p-3">
                <div class="text-xl font-bold mb-2">Detalles de dirección</div>
                  <form @submit.prevent="submit()" class="block sm:flex flex-wrap justify-center">
                    <div class="flex justify-between w-full">
                        <div class="w-full m-1">
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
                        </div>
                        <div class="w-full m-1">
                            <TextInput class="w-full" 
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
                            
                        </div>
                    </div>
                    <button :disabled="isWorking" type="submit" 
                        class="mt-6 text-[21px] text-white font-bold p-4 py-2 rounded-3xl bg-gradient-to-tl from-[#fc66ff] via-[#954fff] to-[#cb53ff] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
                    >
                        <div v-if="!isWorking">Actualizar datos</div>
                        <Icon v-else name="line-md:loading-loop" size="25" class="mr-2"/>
                        
                    </button>
                </form>
            </div>
        </div>
        
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user.js'
const userStore = useUserStore()

let contactName = ref(null)
let address = ref(null)
let zipCode = ref(null)
let city = ref(null)
let country = ref(null )

let currentAddress = ref(null )
let isUpdate = ref(false )
let isWorking = ref(false )
let error = ref(null )

watchEffect(() => {
    userStore.isLoading = false
})

const submit = async() => {
    isWorking.value = true
    error.value = null

    if(!contactName.value){
        error.value = {
            type: 'contactName',
            message: 'Se requiere un nombre'
        }
    } else if(!address.value){
        error.value = {
            type: 'address',
            message: 'Se requiere una dirección'
        }
    } else if(!zipCode.value){
        error.value = {
            type: 'zipCode',
            message: 'Se requiere un codigo postal'
        }
    } else if(!city.value){
        error.value = {
            type: 'city',
            message: 'Se requiere una ciudad'
        }
    } else if(!country.value){
        error.value = {
            type: 'country',
            message: 'Se requiere un país'
        }
    }

    if(error.value){
        isWorking.value = false
        return
    }
}


</script>
