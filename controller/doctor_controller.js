const Doctor=require('../models/doctor');


module.exports.regester=async(req,res)=>{

    const isexist= await Doctor.findOne({
        contact:req.body.contact,
    })

    

    if(isexist) return res.status(200).json({message:'already regestered'})
          await Doctor.create(req.body)
          return res.status(200).json({message:'regestration successfull'})

}



