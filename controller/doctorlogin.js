const Doctor=require('../models/doctor');
const jwt=require('jsonwebtoken');

module.exports.login= async(req,res)=>{
  
    try{

        let doctor= await Doctor.findOne({contact: req.body.contact})

        console.log(doctor.password,req.body.password);
          

        if (!doctor || doctor.password != req.body.password){
             
                return res.status(200).json({
                    message:'pass or userr not found'
                }
                );
            }
       return res.status(200).json({
            data:{
              token:jwt.sign(doctor.toJSON(),'secret',{expiresIn:'1h'})
            }

          });
      
       

      

    }catch(err){
        console.log(err);
    }


       
  }