const express = require('express');
const router = express.Router();
const settingController = require('../controller/setting_controller');

//console.log('Setting router is loaded');


router.post('/create-setting',settingController.createSetting);

router.get('/show-settings',settingController.showSettinges);

router.get('/show-setting/:id',settingController.showSingleSetting);

router.put('/update-setting/:id', settingController.updateSettingById);

router.delete('/delete-setting/:id',settingController.deleteSetting);

module.exports = router;