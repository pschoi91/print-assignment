<script setup lang="ts">
import { useCatalogueStore } from '@/stores/catalogue';
import { storeToRefs } from 'pinia';

const { products } = storeToRefs(useCatalogueStore())

defineOptions({
    name: "ProductListingView",
    data: () => {
        return {
            productTab: null
        }
    }
})

</script>

<template>
    <v-container>
        <v-tabs 
            v-model="productTab"
            align-tabs="center"
            bg-color="deep-purple-accent-4"
            stacked
        >
            <v-tab :value="products[0]?.sku" :text="products[0]?.title">
                
            </v-tab>
            <v-tab :value="products[1]?.sku" :text="products[1]?.title">
                
            </v-tab>
            <v-tab :value="products[2]?.sku" :text="products[2]?.title">
                
            </v-tab>
        </v-tabs>

        <v-tabs-window v-model="productTab">
            <v-tabs-window-item :key="products[0]?.sku" :value="products[0]?.sku">
                <v-card>
                    <v-card-text>{{ products[0]?.properties }}</v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item :key="products[1]?.sku" :value="products[1]?.sku">
                <v-card>
                    <v-card-text>{{  products[1]?.properties}}</v-card-text>
                </v-card>
            </v-tabs-window-item>
            <v-tabs-window-item :key="products[2]?.sku" :value="products[2]?.sku">
                <v-card>
                    <v-card-text>{{ products[2]?.properties }}</v-card-text>
                </v-card>
            </v-tabs-window-item>
        </v-tabs-window>
    </v-container>
</template>

<style scoped>

</style>