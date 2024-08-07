<script setup lang="ts">
import ProductListingView from '@/views/ProductListingView.vue'

defineOptions({
  name: 'App',
  components: { ProductListingView }
})
</script>

<template>
 <v-app>
  <v-container>
    <v-app-bar title="Catalogue" />
    <v-main app>
      <product-listing-view />
    </v-main>
  </v-container>
 </v-app>
</template>

<style scoped>

</style>
