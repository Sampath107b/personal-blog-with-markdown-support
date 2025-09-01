const jwt=require('jsonwebtoken')
const {promisify}=require('util')
const User=require('../models/userModel')

exports.protect=async (req,res,next)=>{
  try{
    let token;
    if (req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
      }
      if (!token){
        return res.status(401).json({
          status:'fail', message: 'You are not logged in, please log in to get access',
        })
      }
      const decoded=await promisify(jwt.verify)(token,process.env.JWT_SECRET);

      const currentUser=await User.findById(decoded.id);
      if (!currentUser){
        return res.json(401).json({
        status:'fail',
        message:'the user belonging to this token no longer exists',
        })
      }

      req.user=currentUser;
      next();
  }
  catch(err){
    console.error('AUTH MIDDLEWARE ERROR',err);
    return res.status(401).json({
      status:'fail',
      message:"invalid token or session expired.please log in again",
    })
  }
}