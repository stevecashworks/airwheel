const express=require('express');
const userSchema=require('../schemas/userSchema'); 
const bcrypt= require('bcrypt');
const dummyUsers=require('../dummyUsers')
const userRouter=express.Router()
const verifyToken=require('./verify')
const JWT=require('jsonwebtoken')
require('dotenv').config()
//login
 userRouter.post('/login',async(req,res)=>{
   let userByName,userByEmail,isCorrect

   try{

       userByName=  await userSchema.findOne({name:req.body.name});
       userByEmail= await userSchema.findOne({email:req.body.name});
   }catch(err){
      console.log('an error occured, falling back  to dummy data')
      userByEmail=dummyUsers.find(x=>x.email===req.body.email)
      userByName=dummyUsers.find(x=>x.userName===req.body.name)
   }    
    const user=userByName||userByEmail;
    console.log(user)
   
    if(!user){
      return res.status(404).send('user not found')
    }
    if(user._doc){const {password,...otherDetails}=user._doc;
    isCorrect=bcrypt.compare(req.body.password,password,(err,result)=>{
      return result
       
     });

     console.log(isCorrect);
     const token=JWT.sign({id:otherDetails._id},process.env.JWT);
     res.status(200).cookie('access_token',token,{httpOnly:true}).json(otherDetails)
   }
    else{const {password,...otherDetails}=user;
   isCorrect=req.body.password===user.password;
   console.log(user.password,req.body.password)
   console.log(isCorrect)

   }
    
     if(isCorrect){
      const token=JWT.sign({name:user.userName},process.env.JWT);
     return res.status(200).cookie('access_token',token,{httpOnly:true}).json(user)
     }
     else{
      return res.status(403).send('oops you  are not authorised')
     }
   

 })
 //register

 userRouter.post('/register',async(req,res)=>{
  const newUser= new userSchema;
   bcrypt.genSalt(10,async(err,hash)=>{
      try {
         const newUser= new userSchema({...req.body,password:hash });
       const savedUser=  await newUser.save();
       console.log(savedUser)
      } catch (error) {
          console.log(error)
      }
   })
  console.log(newUser);
  res.end();
  
 })
 // editUser

userRouter.put('/edit',verifyToken,(req,res)=>{
   console.log(req)
   return res.status(200).json({success:true})
   
   
}
) 
 module.exports=userRouter
