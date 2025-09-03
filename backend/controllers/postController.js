const { default: mongoose } = require('mongoose');
const Post=require('../models/postModels');



const createPost= async (req,res)=>{
    try{
        const {title,markdownContent,author}=req.body;
        if (!title || !markdownContent){
            return res.status(400).json({message:"please provide title and content"})
        }
        const newPost=await Post.create({
            title,
            markdownContent,
            author,

        });
        res.status(201).json(newPost);
    }
    catch(err){
        console.error(err);
        res.status(400).json({message:"error creating post",error:err.message});

    }
};

const getAllPosts=async (req,res)=>{
    try{


        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const totalPosts = await Post.countDocuments();
        const posts = await Post.find()
            .sort({ createdAt: -1 }) 
            .skip(skip)               
            .limit(limit);    

        res.status(200).json({
            posts,
            currentPage: page,
            totalPages: Math.ceil(totalPosts / limit), 
            totalPosts,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:"error fetching posts",error:err.message});
    }

}

const getPostBySlug=async (req,res)=>{
    try{
        const post=await Post.findOne({slug:req.params.slug});
        if (post){
            res.status(200).json(post);
        }
        else{
            res.status(404).json({message:"Post not found"});
        }



    }
    catch(err){
        console.log(err)
        if (err.name=CastError){
           return res.status(400).json({message:"invalid post id"})

        }
        res.status(500).json({message:"error fetching post",error:err.message})
    }
}

const updatePost = async (req,res)=>{
    try{
        const updatePost= await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )
        if (updatePost){

            res.status(200).json(updatePost)
        }
        else{
            res.status(404).json({message:"page not found 2"})
        }
    }
    catch(error){
        console.log(error);
        if (error.name === 'CastError') {
      return res.status(400).json({ message: `Invalid post ID format: ${req.params.id}` });
    }
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', error: error.message });
    }

    
    res.status(500).json({ message: 'Error updating post', error: error.message });

    }
}

const deletePost=async (req,res)=>{
    try{
        const deletedpost=await Post.findByIdAndDelete(req.params.id);
        if (deletedpost){
            res.status(200).json({message:"post deleted succesfully"});
        }
        else{
            res.status(404).json({message:"page not found 3"});
        }
    }
    catch(err){
        console.error(err);
        if (err.name==CastError){
            return res.status(400).json({message:"invalid id",error:err.message})
        }
        res.status(500).json({message:"error deleting post",error:err.message});

    }

}





module.exports={createPost,getAllPosts,getPostBySlug,updatePost,deletePost,}