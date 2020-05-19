const express=require('express');
const router=express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./AllUsersRoute'));
router.use(require('./MultimediaRoutes'));


module.exports=router