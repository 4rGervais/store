import { sql } from "../config/db.js"

export const getAllProducts = async(req, res) => {
    try {
        const products = await sql`SELECT * FROM products order by created_at desc`;
        console.log(products);
        res.status(200).json({ success: true, data: products})
    } catch (error) {
        res.status(500).json({ success: false, Message: error.message})
    }
}

export const getProduct = async(req, res) => {
    const id = req.params
    const {name, price, image} = req.body()
    try {
        const product = await sql`Select * from products where id=${id}`
        res.status(200).json({ success: true, data: product})
    } catch (error) {
        console.log("Internal server error");
        res.status(500).json({success: false, message: "Internal server error"})
    }
}

export const createProduct = async(req, res) => {
    const {name, image, price} = req.body()
    console.log(req.body());
    if(!name || !image || !price){
        return res.status(400).json({ success: false, message: 'All fields are required'})
    }
    try {
        const newProduct = await sql`
            INSERT into products (name, price, image)
            values (${name},${price},${image}) returning *
        `;
        console.log('New product inserted'+newProduct);
        res.status(201).json({ success: true, data: newProduct})
    } catch (error) {
        console.log('Error while adding a product: ' + error.message);
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}

export const updateProductData = async(req, res) => {
    const id = req.params
    const {name, price, image} = req.body()
    try {
        const updatedProduct = await sql`update products set name = ${name}, price = ${price}, image = ${image} where id=${id} returning *`
        if(updatedProduct.length === 0){
            return res.status(404).json({success: true, message: "Product not found"})
        }
        res.status(200).json({ success: true, data: updatedProduct[0]})
    } catch (error) {
        console.log("Errr while updating a product. ", error.message);
        res.status(500).json({success: false, message: "Internal server error"})
    }
}

export const deleteProduct = async(req, res) => {
    const id = req.params
    try {
        const deletedProduct = await sql`Delete from products where id=${id} returning *`
        if(deletedProduct.length === 0){
            return res.status(404).json({success: true, message: "Product not found"})
        }
        res.status(200).json({ success: true, data: deletedProduct[0]})
    } catch (error) {
        console.log("Error in delete product function", error);
        res.status(500).json({success: false, message: "Internal server error"})
    }
}
