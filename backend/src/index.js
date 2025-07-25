import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser" 
import cors from "cors"




import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDb } from "./Lib/lib.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)



app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT)
    connectDb()
})