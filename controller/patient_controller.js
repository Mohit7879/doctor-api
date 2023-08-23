const Patient=require('../models/patient')
const Doctor=require('../models/doctor')

module.exports.patient=async (req,res)=>{

    const isexist= await Patient.findOne({
        contact:req.body.contact,
    })

    console.log("^^^^^^^^^",isexist)

    if(isexist) return res.render('patient');
        
          return res.send('created');


      
}


module.exports.create=async(req,res)=>{
      console.log(req.body);

      const isexist= await Patient.findOne({contact:req.body.contact});
      
    await Patient.create(req.body)
  //  console.log(req.doctor);
  res.send('created');
  
}



