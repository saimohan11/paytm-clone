import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import main_router from './routes/index.js'
import cors from 'cors'
const app = express();
const port = 3000;
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(async ()=>{
    console.log("mongo db connected")
})
.catch((err)=>{
    console.log(err)
})

app.use(cors());

app.use(express.json());

app.use("/api/v1",main_router)

mongoose.connection.on("open",()=>{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
    })
})
