 const express=require('express');
 const Router= express.Router();
 const PlaceSchema=require('../Schemas/PlaceSchema')
 Router.post('/places',async(req,res)=>{
    try {
         const newPlace =await PlaceSchema.create(req.body)
         res.status(200).json(newPlace)
    } catch (error) {
        console.log(error)
    }
 })
Router.get('/places',async(req,res)=>{
    try {
        const allPlaces= await PlaceSchema.find()
        res.status(200).json(allPlaces);
    } catch (error) {
        console.log(error)
    }
})
Router.get('/places/:place',(req,res)=>{
    res.json(req.params.place)
})


 module.exports=Router