const express=require('express');
const router=express.Router();
const UsersController=require('../controller/UsersController');

router.get('/users/:id/photos',UsersController.findOne);
router.get('/users/:id/videos',UsersController.findOne);

module.exports=router;