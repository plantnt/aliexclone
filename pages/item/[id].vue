<template>
    <MainLayout>
        <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%]">
                    <img v-if="currentImage"
                         class="rounded-lg object-fit"
                         :src="currentImage">
                    <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                        <div v-for="image in images">
                            <img 
                                 @click="currentImage = image"
                                 width="70" class="rounded-md object-fit border-[3px] cursor-pointer"
                                 :class="currentImage === image ? 'border-[#7841fa]' : ''"
                                 :src="image">
                        </div>
                    </div>
                </div>
                <div class="md:w-[60%] bg-white p-3 rounded-lg">
                    <div v-if="true">
                        <p class="mb-2">Titulo</p>
                        <p class="font-light text-[12px] mb-2">Descripcion</p>
                    </div>

                    <div class="flex items-center pt-1.5">
                        <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#EF8686] mr-2"> 
                            <Icon name="ic:baseline-star" class="-mt-[17px]" color="#fff" size="12"/>
                        </span>
                        <p class="text-[#7841fa] ">Descuento del 5%</p>
                    </div>
                    <div class="flex items-center justify-start my-2">
                        <Icon name="ic:baseline-star" color="#EF8686"/>
                        <Icon name="ic:baseline-star" color="#EF8686"/>
                        <Icon name="ic:baseline-star" color="#EF8686"/>
                        <Icon name="ic:baseline-star" color="#EF8686"/>
                        <Icon name="ic:baseline-star" color="#EF8686"/>
                        <span class="text-[13px] font-light ml-2">Reseñas y Ordenes</span>
                    </div>
                    <div class="border-b"/>
                    <div class="flex items-center justify-start gap-2 my-2">
                        <div class="text-xl font-bold">$ {{ priceComputed }} </div>
                        <span class="bg-[#7841fa] bg-opacity-50 text-black text-[9px] font-semibold px-1 rounded-sm">70% off</span>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

let currentImage = ref(null)

onMounted(() => {
    watchEffect(() => {
        currentImage.value = 'https://m.media-amazon.com/images/I/81IRC5sTOjL._AC_UF894,1000_QL80_.jpg'
        images.value[0] = 'https://m.media-amazon.com/images/I/81IRC5sTOjL._AC_UF894,1000_QL80_.jpg'
    })
})

const priceComputed = computed(() => {
    return '26.40'
})

const images = ref([
    '',
    'https://cdn1.coppel.com/images/catalog/pm/4303953-1.jpg',
    'https://www.muebleslluesma.com/blog/wp-content/uploads/2021/06/banco-alfresco-loll-designs-960x960.jpg',
    'https://www.muebleslluesma.com/blog/wp-content/uploads/2021/06/banco-adirondack-con-respaldo-loll-designs-960x960.jpg',
    'https://misterwils.com/wp-content/uploads/2021/06/misterwils-blog-madera-reciclada-4.jpg'
        
])
</script>
