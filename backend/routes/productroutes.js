import express from "express"
import { getAllProducts, createProduct, updateProductData, deleteProduct } from "../controllers/productControllers.js";


const router = express.Router();

router.get('/' , getAllProducts)

router.post('/' , createProduct)

router.put('/' , updateProductData)

router.delete('/' , deleteProduct)
export default router