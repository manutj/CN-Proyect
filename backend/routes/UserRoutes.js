const express=require('express');
const router=express.Router();
const UsersController=require('../controller/UsersController')
const { UserValidator } = require('../validators')

router.post('/users',UserValidator.create,UsersController.create);
    
//GET ALL
router.get('/users', UsersController.find);

//GET ONE
router.get('/users/:id', UsersController.findOne);

//UPDATE
router.patch('/users/:id', UsersController.update);

//DELETE
router.delete('/users/:id', UsersController.delete);

module.exports=router;