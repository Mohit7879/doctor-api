const mongoose =require('mongoose');

// creating a doctor schema
const patientSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    contact:{
        type:Number,
        required:true,
    },


    report:[{
        
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report',
        
    }]
})


module.exports=mongoose.model('Patient',patientSchema);