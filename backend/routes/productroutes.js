import express from "express"
import { getAllProducts, createProduct, getProduct, updateProductData, deleteProduct } from "../controllers/productControllers.js";


const router = express.Router();

router.get('/' , getAllProducts)

router.get('/:id' , getProduct)

router.post('/' , () => creat)

router.put('/:id' , updateProductData)

router.delete('/:id' , deleteProduct)
export default router