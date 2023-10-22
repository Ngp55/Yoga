const express = require('express');
const router = express.Router();
const memberController = require('../controller/members_controller');

//console.log('Member router is loaded');


router.post('/create-member',memberController.createMember);

router.get('/show-members',memberController.showMembers);

router.get('/show-member/:id',memberController.showSingleMember);

router.put('/update-member/:id', memberController.updateMemberById);

router.delete('/delete-member/:id',memberController.deleteMember);

module.exports = router;