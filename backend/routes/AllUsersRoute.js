const express=require('express');
const router=express.Router();
const UsersController=require('../controller/UsersController');

router.get('/all-users', UsersController.find);

module.exports=router;