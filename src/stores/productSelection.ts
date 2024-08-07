import { defineStore } from "pinia";

export const useProductSelectionStore = defineStore({
    id: 'productSelection',
    state: () => ({
        selectedProduct: ''
    })
})