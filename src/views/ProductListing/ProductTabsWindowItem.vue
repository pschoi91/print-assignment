<script setup lang="ts">
import type { Product } from '@/assets/types/Product';

defineProps<{
    sku: Product['sku']
    title: Product['title']
}>()

</script>

<template>
    <v-tabs-window-item :key="sku" :value="sku">
        <v-card>
            <v-card-text>
                This tab is for {{ title }}
            </v-card-text>
            <!-- <v-card-text>{{ products[0]?.properties }}</v-card-text> -->
        </v-card>
    </v-tabs-window-item>
</template>

<style scoped>

</style>