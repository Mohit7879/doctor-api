const router=require('express').Router();


router.use('/doctors',require('./doctor'))
router.use('/patient',require('./patient'))
router.use('/reports',require('./report'))

module.exports=router;