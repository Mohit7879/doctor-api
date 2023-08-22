const router=require('express').Router();
const doctorcontroller=require('../controller/doctor_controller');

router.get('/',(req,res)=>{
    res.render('doctor_regester');
})

router.post('/regester',doctorcontroller.regester);

router.use('/doctors',require('./doctor'))
router.use('/patient',require('./patient'))
router.use('/reports',require('./report'))

module.exports=router;