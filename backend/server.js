import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/post_routes.js"

dotenv.config()


const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api",router)


app.listen(PORT, ()=>{
    console.log(`server is running in the port : ${PORT}`)
})