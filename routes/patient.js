const router=require('express').Router();
const patient_controller=require('../controller/patient_controller');
const report_controller=require('../controller/report_controller');

router.post('/:id/create_report',report_controller.report)
router.get('/:id/all_reports',report_controller.allreports)
router.post('/regester',patient_controller.create);

module.exports=router;