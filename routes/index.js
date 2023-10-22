const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');


router.get('/',homeController.home);

router.use('/blog',require('./blog'));
router.use('/event',require('./event'));
router.use('/instructor',require('./instructor'));
router.use('/booking',require('./booking'));
router.use('/class',require('./class'));
router.use('/user',require('./user'));
router.use('/members',require('./members'));
router.use('/messages',require('./messages'));
router.use('/setting',require('./setting'));

//console.log('Index router is loaded');

module.exports = router;