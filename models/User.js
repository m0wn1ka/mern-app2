const mongoose=require('mongoose');
const { Schema } = mongoose;
const UserSchema=new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        uniquie:true
    },
    password:{
        type:String,
        required:true   
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})
module.exports=User=mongoose.model('user',UserSchema);