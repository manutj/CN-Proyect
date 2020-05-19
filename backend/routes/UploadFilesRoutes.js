const express=require('express');
const router=express.Router();
const UsersController=require('../controller/UsersController');

router.patch('/users/:id/upload-photo/',UsersController.uploadPhoto);
router.patch('/users/:id/upload-video',UsersController.uploadVideo);
router.patch('/users/:id/upload-profile-image',UsersController.update);

module.exports=router;