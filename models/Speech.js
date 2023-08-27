const mongoose=require('mongoose');
const User=require('./User')
const { Schema } = mongoose;
const SpeechSchema=new mongoose.Schema({
    _id: {
        type:Schema.Types.ObjectId, 
        ref: 'User',   
        required: true
      },  
   sayings:[String]
   
})
module.exports=Speech=mongoose.model('speech',SpeechSchema);