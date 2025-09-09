require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const postRoutes=require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');


const app=express();
app.use(cors({
    origin: "https://personal-blog-with-markdown-support.vercel.app",
    credentials:true,
}))
app.use(express.json());




const PORT= process.env.PORT ||5000;

app.use('/api/posts',postRoutes);

app.use('/api/auth', authRoutes);

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