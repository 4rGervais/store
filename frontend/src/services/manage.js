import ProductService from "./api";
import { create } from "zustand"

const productStore = create((set) => ({
    products: [],
    error: null,
    getAllProducts: async () => {
        try {
            const response = await ProductService.getAllProducts()
            console.log(response.data)
            set({products: response.data, count: response.data.length})
        } catch (err) {
            set({error: err.message})
        }
    },
    getOneProducts: async (id) => {
        try {
            const response = await ProductService.getOneProduct(id)
            set({products: response.data, count: response.data.length})
        } catch (err) {
            set({error: err.message})
        }
    },
    updateProduct:async (id, productData) => {
        try {
            const response = await ProductService.updateProduct(id, productData)
            set({products: response.data, count: response.data.length})
        } catch (err) {
            set({error: err.message})
        }
    },
    deleteProduct:async (id) => {
        try {
            const response = await ProductService.deleteProduct(id) 
            set({products: response.data, count: response.data.length})
        } catch (err) {
            set({error: err.message})
        }
    }
}))

export default productStore