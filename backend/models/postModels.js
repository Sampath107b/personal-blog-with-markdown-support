const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"A post must have a Title"],
        trim: true,
    },
    markdownContent:{
        type:String,
        required:[true, "A post must have a content"],

    },
    author:{
        type:String,
        default:"admin",
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

const Post=mongoose.model('post',postSchema);
module.exports=Post;