import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productroutes.js"
dotenv.config

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json()) // allows us tu parse incoming data

app.use(cors()) // for avoiding course errors in the client

app.use(helmet()) // helmet is a security middleware that helps you to secure your app by setting up different http headers.

app.use(morgan()) // logs the request

app.get("/",productRoutes)

app.listen(PORT, () => {
    console.log("Our server is running on port " + PORT);
})