import { defineStore } from "pinia";

export const useProductSelectionStore = defineStore({
    id: 'productSelection',
    state: () => ({
        selectedProduct: ''
    }),
    getters: {

    },
    actions: {
        selectProduct(sku: string) {
            this.selectedProduct = sku
        }
    }
})