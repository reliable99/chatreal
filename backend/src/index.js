import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js"
import { connectDb } from "./Lib/lib.js";

dotenv.config()

const app = express();
app.use(express.json())

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT)
    connectDb()
})