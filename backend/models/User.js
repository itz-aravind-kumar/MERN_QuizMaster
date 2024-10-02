const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required: true},
    role: {type:Number}
},
{
    collection:'users'
});

module.exports=mongoose.model('userSchema',userSchema)