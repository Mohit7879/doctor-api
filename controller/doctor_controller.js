const Doctor=require('../models/doctor');


module.exports.regester=async(req,res)=>{

    const isexist= await Doctor.findOne({
        contact:req.body.contact,
    })

    console.log("^&&&&&&",isexist)

    if(isexist) return res.render('patient');
          await Doctor.create(req.body)
          return res.send('created');

}


// module.exports.login=(req,res)=>{

//   return res.send('login done')
     
// }

