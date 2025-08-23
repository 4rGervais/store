import React, { useEffect } from "react";
import productStore from "../services/manage";

function GetProducts (){
    const { products, getAllProducts, getOneProduct, updateProduct, deleteProduct } = productStore()
    useEffect(()=>{
        getAllProducts()
    },[])
    return (
        <div>
            <table>
                <tr>
                    <th>N<sup><u>0</u></sup></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock quantity</th>
                </tr>
                {
                products.map((val, i)=>{
                    return (
                    <tr>
                        <td>{i+1}</td>
                        <td>{val.name}</td>
                        <td>{val.description}</td>
                        <td>{val.price}</td>
                        <td>{val.stock_quantity}</td>
                    </tr>
                    )
                })
                }
            </table>
        </div>
    );
}

export default GetProducts;
