const express = require('express');
const router = express.Router();
const messageController = require('../controller/messages_controller');

//console.log('Message router is loaded');


router.post('/create-message',messageController.createMessage);

router.get('/show-messages',messageController.showMessages);

router.get('/show-message/:id',messageController.showSingleMessage);

router.put('/update-message/:id', messageController.updateMessageById);

router.delete('/delete-message/:id',messageController.deleteMessage);

module.exports = router;