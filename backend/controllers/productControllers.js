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

export const getProduct = async(req, res) => { }

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
    // 
}

export const deleteProduct = async(req, res) => {
    // 
}
