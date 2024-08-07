<script setup lang="ts">
import type { Product } from '@/assets/types/Product';

import { useCatalogueStore } from '@/stores/catalogue';

const { getProductPropertiesBySKU} = useCatalogueStore();

const product = defineProps<{
    sku: Product['sku']
    title: Product['title']
}>()

const properties = getProductPropertiesBySKU(product.sku);

</script>

<template>
    <v-card>
        <v-card-title>{{ title }}</v-card-title>

        <v-container>
            <v-row justify="space-around">
                <v-col cols="12" md="6">
                    <v-dialog transition="dialog-top-transition" width="auto">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" block>
                                Create some awesome {{ sku }}
                            </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card>
                                <v-toolbar :title="title"></v-toolbar>
                                <v-row>
                                    <v-col v-for="property in properties" v-bind:key="property.slug">
                                        <v-card>
                                            <v-card-subtitle>{{ property.title }}</v-card-subtitle>
                                            <v-radio-group>
                                                <v-radio v-for="option in property.options" v-bind:key="option.slug" :label="option.name" :value="option.slug"></v-radio>
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

<style scoped></style>