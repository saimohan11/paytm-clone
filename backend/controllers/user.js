import express from 'express';
import bodyParser from 'body-parser';
import User from '../models/user_db.js';
import { z } from "zod";
import jwt from "jsonwebtoken"
import JWT_SECRET from '../config.js';
const app = express()

app.use(express.json())

const signupSchema = z.object({
    firstname:z.string(),
    username:z.string().email(),
    password:z.string()
})

export const signup = async(req,res)=>{
    const body = req.body;
    const result = signupSchema.safeParse(body);
    if(!result.success) {
        return res.json({
            message:"mails input is incorrect"
        })
    }

    const existingUser = await User.findOne({username:body.username})
    if(existingUser) {
        res.json({
            message:"username already exists"
        })
    } else {
        const user = await User.create({
            firstname:body.firstname,
            username:body.username,
            password:body.password
        })
    
        const userId = user._id;
        const token = jwt.sign({userId},JWT_SECRET,{expiresIn:"1h"})
        res.status(200).json({
            message:"user created successfully",
            token:token
        })
    }
}
