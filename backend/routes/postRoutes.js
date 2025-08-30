const express=require("express")

const {createPost,getAllPosts,getPostById,updatePost,deletePost}= require("../controllers/postController");


const router=express.Router();


router.route('/').post(createPost).get(getAllPosts);

router.route('/:id').get(getPostById).patch(updatePost).delete(deletePost);



module.exports=router;