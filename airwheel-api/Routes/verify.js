const jwt=require('jsonwebtoken');
require('dotenv').config()
const verifyToken= async(req,res,next)=>{
    jwt.verify(req.cookies.access_token,process.env.JWT,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{

            req.user=data
            next()
        }
    })
}
module.exports=verifyToken