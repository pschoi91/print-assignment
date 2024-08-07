<script setup lang="ts">
import type { Product } from '@/assets/types/Product';

import { useCatalogueStore } from '@/stores/catalogue';

const { getProductPropertiesBySKU } = useCatalogueStore();

const product = defineProps<{
    sku: Product['sku']
    title: Product['title']
}>()

const properties = getProductPropertiesBySKU(product.sku);

defineOptions({
    name: 'ProductCard',
    data() {
        return {
            propertyOptionSelected: ''
        }
    }
})
</script>

<template>
    <v-card class="product-card">
        <v-card-title>{{ title }}</v-card-title>

        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-dialog transition="dialog-top-transition" width="auto">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps">
                                Create some awesome {{ sku }}
                            </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card>
                                <v-toolbar :title="title"></v-toolbar>
                                <v-row xs="12">
                                    <v-col xs="4" v-for="property in properties" v-bind:key="property.slug">
                                        <v-card class="product-property-card">
                                            <v-card-subtitle>{{ property.title }}</v-card-subtitle>
                                            <v-radio-group v-model="propertyOptionSelected">
                                                <v-radio v-for="option in property.options" v-bind:key="option.slug"
                                                    :label="option.name" :value="option.slug"></v-radio>
                                            </v-radio-group>
                                        </v-card>
                                    </v-col>
                                </v-row>

                                <v-card-actions class="justify-end">
                                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<style scoped>
.product-card {
    background-color: hotpink;
    color: blanchedalmond;
    width: 25vw;
    margin: 5px;
}

.v-btn {
    height: auto !important;
    padding: 10px;
}

.product-property-card {
    margin: 5px;
    padding: 5px;
    width: 300px;
    border: 1px solid rgb(18, 17, 17);
    box-shadow: 2px 5px 1px 1px rgba(26, 26, 26, 0.2);
}

.v-toolbar {
    background-color: hotpink;
    color: blanchedalmond;
}
</style>