import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParse from "cookie-parser"
dotenv.config();


const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParse())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})