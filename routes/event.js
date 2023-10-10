const express = require('express');
const router = express.Router();
const eventController = require('../controller/event_controller');

//console.log('event router is loaded');


router.post('/create-event',eventController.createEvent);

router.get('/show-events',eventController.showEvents);

router.get('/show-event/:id',eventController.showSingleEvent);

router.put('/update-event/:id', eventController.updateEventById);

router.delete('/delete-event/:id',eventController.deleteEvent);

module.exports = router;