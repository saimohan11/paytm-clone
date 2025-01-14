import mongoose from "mongoose";

const {Schema, model} = mongoose;

const user = new Schema({
    firstname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const accountSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    balance: {
        type:Number,
        default:0,
        required:true
    }
});

const User = model('User',user)
const Account = model('Account',accountSchema)

export {User,Account};