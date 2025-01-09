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
})

const User = model('User',user)

export default User;