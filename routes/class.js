const express = require('express');
const router = express.Router();
const classController = require('../controller/class_controller');

//console.log('class router is loaded');


router.post('/create-class',classController.createClass);

router.get('/show-classes',classController.showClasses);

router.get('/show-class/:id',classController.showSingleClass);

router.put('/update-class/:id', classController.updateClassById);

router.delete('/delete-class/:id',classController.deleteClass);

module.exports = router;