const mongoose =require('mongoose');

// creating a doctor schema
const reportSchema= new mongoose.Schema({

    doctor:{
        type:String,
        required:true,
    },

    patient:{
      type:mongoose.Schema.Types.ObjectId,
    
      ref:'Patient',
  },

      status:{
        type:String,
      required:true, 
        
    },

     date   : { type: Date,
       required: true, 
       default: Date.now }
})


module.exports=mongoose.model('Report',reportSchema);