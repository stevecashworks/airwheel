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
 console.log(req.body)
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
      return res.status(404).json({success:false,message:'user not found'})
    }
    if(user._doc){const {password,...otherDetails}=user._doc;
    isCorrect=bcrypt.compare(req.body.password,password,(err,result)=>{
      return result
       
     }); 

     console.log(isCorrect);
     const token=JWT.sign({data:otherDetails},process.env.JWT);
     res.status(200).cookie('access_token',token,{httpOnly:true}).json(otherDetails)
   }
    else{const {password,...otherDetails}=user;
   isCorrect=req.body.password===user.password;
   console.log(user.password,req.body.password)
   console.log(isCorrect)

   }
    
     if(isCorrect){
      const token=JWT.sign(user,process.env.JWT);
      
     return res.status(200).cookie('access_token',token,{httpOnly:true}).json({success:true,message:user})
     }
     else{
      return res.status(403).json({success:false,message:'incorrect password'})
     }
   

 })
 // get all users
  userRouter.get('/all',async(req,res)=>{
     const allUsers= await userSchema.find()
     res.status(200).json(allUsers)

  })
  //delete a user
  userRouter.delete('/delete/:id',verifyToken,async(req,res)=>{
    const {data}=req.user;
    
    const userId= req.params.id;
    const thisUser=await userSchema.findById(userId)
    if(!(data._id===thisUser.id)){
      return res.status(403).send("you're not allowed to delete this user")
    }
    else{

      try {
          await userSchema.findByIdAndDelete(userId);
          res.status(200).send('user as been deleted successfully')
        
        } catch (error) {
             console.log(error)
            res.status(200).send('Oops something went wrong')
          
          }
          
          
        }
          
  })
 //register

 userRouter.post('/register',async(req,res)=>{
  const newUser= new userSchema;
   bcrypt.genSalt(10,async(err,hash)=>{
      try {
         const newUser= new userSchema({...req.body,password:hash });
       const savedUser=  await newUser.save();
       return res.status(200).json(savedUser)
      } catch (error) {
          console.log(error);
          res.status(403).json(error.message)
      }
   })


 })
 // editUser

userRouter.put('/edit',verifyToken,(req,res)=>{
   console.log(req)
   return res.status(200).json({success:true})
   
   
}
) 
 module.exports=userRouter
