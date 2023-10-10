const express = require('express');
const router = express.Router();
const instructorController = require('../controller/instructor_controller');

//console.log('instructor router is loaded');


router.post('/create-instructor',instructorController.createInstructor);

router.get('/show-instructors',instructorController.showInstructors);

router.get('/show-instructor/:id',instructorController.showSingleInstructor);

router.put('/update-instructor/:id', instructorController.updateInstructorById);

router.delete('/delete-instructor/:id',instructorController.deleteInstructor);

module.exports = router;