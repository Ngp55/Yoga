const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

//console.log('user router is loaded');


router.post('/create-user',userController.createUser);

router.get('/show-users',userController.showUsers);

router.get('/show-user/:id',userController.showSingleUser);

router.put('/update-user/:id', userController.updateUserById);

router.delete('/delete-user/:id',userController.deleteUser);

module.exports = router;