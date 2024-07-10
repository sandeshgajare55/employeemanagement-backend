import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    fathername:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
},{timestamps:true})

const userModel= mongoose.model('user',userSchema);

export default userModel