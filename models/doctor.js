const mongoose =require('mongoose');

// creating a doctor schema
const doctorSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    contact:{
        type:Number,
        required:true,
    },

    patient:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient',
        }
    ],
})


module.exports=mongoose.model('Doctor',doctorSchema);