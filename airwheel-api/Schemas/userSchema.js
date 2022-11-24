const Mongoose= require('mongoose');
const userSchema= new Mongoose.Schema({
    
        name:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            unique:true,
            required:true

        },
        password:{
            type:String,
            unique:true,
            required:true

        }

    
})
 module.exports=Mongoose.model('users',userSchema);