const Booking =require('../model/booking');

//console.log('Booking controller is loaded');

module.exports.createBooking = async function(req,res){
  const { id,email,displayName,classId  } =req.body;
  if ( !email || !displayName || !classId)  {
    const missingFields = [];

    if (!email) missingFields.push('Email');
    if (!displayName) missingFields.push('Display Name');
    if (!classId) missingFields.push('Class ID');
    
    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }

      const booking = new Booking({ id,email,displayName,classId });
      try {
        await booking.save();
        return res.json({ message: 'Booking created successfully' });
      } catch (error) {
        return res.status(500).json({ message: 'An error occurred while saving the Booking.' });
      }
    
    }
    


    module.exports.showbookings = async function (req, res) {
      try {
        const booking = await Booking.findAll();
        console.log(booking);
        res.json(booking);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while getting Bookings' });
      }
    };
    
    module.exports.showSingleBooking = async function (req, res) {
      const bookingId = req.params.id;
    
      try {
        const booking = await Booking.findByPk(bookingId);
    
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
    
        res.json(booking);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching Booking.' });
      }
    };

    
module.exports.updateBookingById = async (req, res) => {
      const bookingId = req.params.id;
      const updatedData = req.body; // Assuming you send the updated data in the request body
    
      try {
        const booking = await Booking.findByPk(bookingId);
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
    
        const updatedBooking = await booking.update(updatedData);
        res.json(updatedBooking);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the Booking.' });
      }
    }
    
    
    module.exports.deleteBooking = async function (req, res) {
      const bookingId = req.params.id;
    
      try {
        const booking = await Booking.findByPk(bookingId);
    
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
    
        await booking.destroy();
        res.json({ message: 'Booking deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the Booking.' });
      }
    };
    