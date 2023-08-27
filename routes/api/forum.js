const Speech=require("../../models/Speech");
const express=require('express')
const router=express.Router();
router.get('/',async (req,res)=>{
    try{
        const response= await Speech.find()
   res.json(response)
    }catch(err){
        
    res.status(500).json({ error: err });
    }
   
});
module.exports=router