const mongoose =require('mongoose');

// creating a doctor schema
const doctorSchema= new mongoose.Schema({

    name:{
        type:String,
       
    },

    contact:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

 
})


module.exports=mongoose.model('Doctor',doctorSchema);