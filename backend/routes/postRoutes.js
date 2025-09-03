const express=require("express")

const {createPost,getAllPosts,getPostBySlug,updatePost,deletePost}= require("../controllers/postController");
const {protect} = require('../middleware/authMiddleware');

const router=express.Router();


router.get('/',getAllPosts);
router.get('/:slug',getPostBySlug);
router.post('/',protect,createPost);
router.patch('/:id',protect, updatePost);
router.delete('/:id',protect, deletePost);



module.exports=router;