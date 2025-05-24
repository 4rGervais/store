import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productroutes.js"
import { sql } from "./config/db.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json()) // allows us tu parse incoming data

app.use(cors()) // for avoiding course errors in the client

app.use(helmet()) // helmet is a security middleware that helps you to secure your app by setting up different http headers.

app.use(morgan()) // logs the request

async function initDB(){
    try{
        await sql`
            CREATE TABLE IF NOT EXISTS products  (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        console.log('database initialized successfully');
    } catch(error){
        console.log(sql.query);
        console.log('Error:: ' + error);
    }
}

app.use("/", productRoutes);


initDB().then(()=>{
    app.listen(PORT, () => {
        console.log("Our server is running on port " + PORT);
    })
})