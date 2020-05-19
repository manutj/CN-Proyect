const express=require('express');
const router=express.Router();
const {verifyToken}=require('../middleware');

router.use(require('./PublicRoutes'));

//router.use(verifyToken);
router.use(require('./PrivateRoutes'));

module.exports=router;