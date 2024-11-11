require("dotenv").config();
const express=require("express");
const app=express();
const PORT=5000;
const connectDB=require("./utils/db");
const authRouter=require("./routes/auth-route");
//middleware
app.use(express.json());
app.use("/api/auth",authRouter);
//promise resolved connectDB
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Backend running successfully at PORT ${PORT}`);
    });
});