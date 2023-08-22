const router=require('express').Router();
const report_controller=require('../controller/report_controller');
router.get('/',report_controller.patientbystatus)

module.exports=router;