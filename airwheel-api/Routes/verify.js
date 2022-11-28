const jwt=require('jsonwebtoken');
require('dotenv').config()
const verifyToken= async(req,res,next)=>{
    const token=req.cookies.access_token
    console.log(token);
    if(!token){
        return res.status(403).send('user is not authenticated')
    }
    else{

        jwt.verify(token,process.env.JWT,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                
                req.user=data
                next()
            }
        })
    }
}
module.exports=verifyToken