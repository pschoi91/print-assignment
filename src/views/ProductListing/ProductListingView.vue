<script setup lang="ts">
import { useCatalogueStore } from '@/stores/catalogue';
import { storeToRefs } from 'pinia';

import ProductCard from '@/views/ProductListing/ProductCard.vue';

const { products } = storeToRefs(useCatalogueStore())

defineOptions({
    name: "ProductListingView",
    components: {
        ProductCard
    }
})
</script>

<template>
    <v-container>
        <v-row>
            <product-card v-for="product in products" v-bind:key="product.sku" v-bind="product"></product-card>
        </v-row>
    </v-container>
</template>

<style scoped></style>