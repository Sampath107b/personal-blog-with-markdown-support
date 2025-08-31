require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const postRoutes=require('./routes/postRoutes');

const app=express();
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json());




const PORT= process.env.PORT ||5000;

app.use('/api/posts',postRoutes);

const startServer=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongobd connected successfully");
        app.listen(PORT, ()=>{
        console.log(`server is running on ${PORT}`);
        });
    }
    catch(err){
        console.error("failed to connect", err);
        process.exit(1);
    }


};

startServer();