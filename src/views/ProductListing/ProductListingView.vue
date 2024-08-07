<script setup lang="ts">
import { useCatalogueStore } from '@/stores/catalogue';
import { storeToRefs } from 'pinia';

import ProductCard from '@/views/ProductListing/ProductCard.vue';
import { useProductSelectionStore } from '@/stores/productSelection';

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
        <product-card v-for="product in products" v-bind:key="product.sku" v-bind="product"></product-card>
    </v-container>
</template>

<style scoped></style>