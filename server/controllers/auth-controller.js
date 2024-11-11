const User=require("../models/user-model");
const home=(req,res)=>{
    try{    
        res.status(200).send("Authentication successfull.");
    }catch(error){  
        res.status(400).send("Page not found!");
    }
};
module.exports={home};