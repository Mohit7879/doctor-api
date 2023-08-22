const router=require('express').Router();
const passport=require('passport');
const doctorcontroller=require('../controller/doctor_controller');
const logincontroller=require('../controller/doctorlogin')


router.get('/loginpage',(req,res)=>{
    res.render('login');
})

// router.post('/login', passport.authenticate(
//     'local',
//     {failureRedirect: '/signin/loginpage'},
// ), doctorcontroller.login);
  

router.post('/login',logincontroller.login);

module.exports=router;