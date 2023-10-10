const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');


router.get('/',homeController.home);

router.use('/blog',require('./blog'));
router.use('/event',require('./event'));
router.use('/instructor',require('./instructor'));

//console.log('Index router is loaded');

module.exports = router;