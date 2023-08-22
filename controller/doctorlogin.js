const Doctor=require('../models/doctor');
const jwt=require('jsonwebtoken');

module.exports.login= async(req,res)=>{

    try{

        let doctor= await Doctor.findOne({contact: req.body.contact})

       // console.log('inside strategy');
          

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
      //   return res.redirect('/patient/regester')
       

      

    }catch(err){
        console.log(err);
    }


       
  }