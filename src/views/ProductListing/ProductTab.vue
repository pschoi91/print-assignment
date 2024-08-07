<script setup lang="ts">
import type { Product } from '@/assets/types/Product';

defineProps<{
    sku: Product['sku']
    title: Product['title']
}>()

</script>

<template>
    <v-tab :value="sku" :text="title" />
</template>

<style scoped>

</style>