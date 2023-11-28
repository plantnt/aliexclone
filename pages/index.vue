<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <div v-if="products" v-for="product in products" :key="product">
                    <ProductComponent :product="product" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
    { id: 1, title: "title 1", description: "desc", url: "https://m.media-amazon.com/images/I/81IRC5sTOjL._AC_UF894,1000_QL80_.jpg", price: 1000 },
    { id: 2, title: "title 2", description: "desc", url: "https://cdn1.coppel.com/images/catalog/pm/4303953-1.jpg", price: 1000 },
    { id: 3, title: "title 3", description: "desc", url: "https://cdn1.coppel.com/images/catalog/pm/4304083-1.jpg", price: 1000 },
    { id: 4, title: "title 4", description: "desc", url: "https://www.muebleslluesma.com/blog/wp-content/uploads/2021/06/banco-alfresco-loll-designs-960x960.jpg", price: 1000 },
    { id: 5, title: "title 5", description: "desc", url: "https://www.muebleslluesma.com/blog/wp-content/uploads/2021/06/banco-adirondack-con-respaldo-loll-designs-960x960.jpg", price: 1000 },
    { id: 6, title: "title 6", description: "desc", url: "https://misterwils.com/wp-content/uploads/2021/06/misterwils-blog-madera-reciclada-4.jpg", price: 1000 }
]
</script>
