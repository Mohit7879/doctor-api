const router=require('express').Router();

const doctorcontroller=require('../controller/doctor_controller');
const logincontroller=require('../controller/doctorlogin');
router.post('/regester',doctorcontroller.regester);
router.post('/login',logincontroller.login);

module.exports=router;