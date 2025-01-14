import express from 'express';
import { Account } from '../models/user_db.js';
import mongoose from "mongoose";


export const balance = async(req,res) => {
    const account = await Account.findOne({
        userId:req.userId
    });
    res.json({
        balance:account.balance
    });
}

export const transfer = async(req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount,to} = req.body;
    const account = await Account.findOne({userId:req.userId}).session(session)
    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account or insufficient balance"
        })
    } else {
        const toAccount = await Account.findOne({userId:to}).session(session)
        if(!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Account not found"
            })
        }
    } 

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session)
    await session.commitTransaction();
    await session.endSession();
    res.json({
        message: "Transfer successful"
        });
}
