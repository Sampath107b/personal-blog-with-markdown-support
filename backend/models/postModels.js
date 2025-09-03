const mongoose=require("mongoose");
const slugify =require("slugify");
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"A post must have a Title"],
        trim: true,
    },
    slug:{

        type:String,
        unique:true,

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

postSchema.pre('save', function (next) {
    
    if (this.isModified('title')) {
        
        this.slug = slugify(this.title, { lower: true, strict: true });
    }

    
    next();
});



const Post=mongoose.model('post',postSchema);
module.exports=Post;