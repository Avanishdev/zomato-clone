const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});
const User=new mongoose.model("users",userSchema);
module.exports=User;