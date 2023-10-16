const express = require('express');
const router = express.Router();
const bookingController = require('../controller/booking_controller');

//console.log('booking router is loaded');


router.post('/create-booking',bookingController.createBooking);

router.get('/show-bookings',bookingController.showbookings);

router.get('/show-booking/:id',bookingController.showSingleBooking);

router.put('/update-booking/:id', bookingController.updateBookingById);

router.delete('/delete-booking/:id',bookingController.deleteBooking);

module.exports = router;