const Report=require('../models/report')
const Patient = require('../models/patient');
const doctor = require('../models/doctor');
module.exports.report=async(req,res)=>{

    let report= await Report.create({
        doctor:req.body.doctor,
        status:req.body.status,
         patient:req.params.id,
    })

    const patient=await Patient.findById(req.params.id);
    
         patient.report.push(report);

         await patient.save();

        return res.status(200).json({
            message:"report created",
        })

}

module.exports.allreports=async(req,res)=>{

 const reports=await Patient.findById(req.params.id).populate( {path: 'report',
 options: { sort: { date: 1 } }})
 //console.log(reports);
 return res.status(200).json({
    data:reports,
 })
 



}


module.exports.patientbystatus=async(req,res)=>{
          
    const all_patients=await Report.find({status:req.query.status}).populate('patient');

    console.log(all_patients);

    return res.status(200).json({data:all_patients});
  

}