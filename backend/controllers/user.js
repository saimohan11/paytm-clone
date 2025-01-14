import express, { Router } from 'express';
import bodyParser from 'body-parser';
import {User,Account} from '../models/user_db.js';
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
              
        await Account.create({
            userId:userId,
            balance: 1 + Math.random() * 10000
        })

        const token = jwt.sign({userId},JWT_SECRET)
        res.status(200).json({
            message:"user created successfully",
            token:token
        })
    }
}


const signinSchema = z.object({
    username:z.string().email(),
    password:z.string()
})

export const signin = async(req,res)=>{
    const body = req.body;
    const result = signinSchema.safeParse(body);
    if(!result.success) {
        return res.json({
            message:"mails input is incorrect"
            })
    } else {
        const user = await User.findOne({
            username:body.username,
            password:body.password
        })
        if(user) {
            const userId = user._id;
            const token = jwt.sign({userId},JWT_SECRET);
            res.status(200).json({
                message:"user logged in successfully",
                token:token
            })
        }
    }
}

const updateSchema = z.object({
    firstname:z.string(),
    username:z.string(),
    password:z.string()
})

export const updateUser = async (req,res)=>{
    const body = req.body;
    const result = updateSchema.safeParse(body);
    if(!result.success) {
        return res.status(403).json({
            message:"invalid input"
        })
    } else {
        const update = await User.updateOne(body,{
            $set:{
                firstname:body.firstname,
                username:body.username,
                password:body.password
                }
        })
        if(update) {
            res.status(200).json({
                message:"user updated successfully"
                })
    }
}}