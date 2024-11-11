const mongoose=require("mongoose");
const MONGO_URI=process.env.MONGO_URL;
const connectDB=async()=>{
    try{    
        await mongoose.connect(MONGO_URI);
        console.log("DB connection successful");
    }catch(error){
        console.error("DB connection failed");
        process.exit(0);
    }
};
module.exports=connectDB;