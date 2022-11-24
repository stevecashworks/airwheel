const  Mongoose= require('mongoose');
const  PlaceSchema=new Mongoose.Schema({
 PlaceName:{type:String, required:true},
 Hotels:[
    {
        description:{type:String, default:"No description was provided"},
        name:{type:String, required:true},
        image:{type:String,required:true },
        price:{type:Number, required:true},
        rating:Number
    }
 ],
})
module.exports=Mongoose.model('Places',PlaceSchema)