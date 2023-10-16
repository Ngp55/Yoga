const Event =require('../model/events');

//console.log('event controller is loaded');

// id
// name
// description
// date
// url
// image
// module.exports.createEvent = async function(req,res){
//     const { id,name,description,date,image } = req.body;
    
//     const eventObj = Event.build(event);
//     eventObj.save().then(() =>{
//         res.status(201).json({ message: 'Event added successfully' });
//     })
//     .then((error) =>{
//         console.log(error);
//     })

// }


module.exports.createEvent = async function (req, res) {
  const { id, name, description, date, image } = req.body;
  if (!name || !description || !date || !image ) {
    const missingFields = [];

    if (!name) missingFields.push('Name');
    if (!description) missingFields.push('Description');
    if (!date) missingFields.push('Date');
    if (!image) missingFields.push('Image');

    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const event = new Event({ id, name, description, date, image });

  try {
    await event.save();
    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'An error occurred while saving the Event.' });

  }
}

module.exports.showEvents = async function(req,res){
    // Event.findAll().then((events) =>{
    //     console.log(events);
        
    //     res.json(events);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.status(500).json({error: 'An error occured while getting Events'});
    //     })
    try{
      const event = await Event.findAll();
      console.log(event);
      res.json(event);

    }catch(error){
      res.status(500).json({error: 'An error occured while getting Events'});

    }
    }

module.exports.showSingleEvent = async function(req,res){
    const eventID = req.params.id;
    //console.log(eventID);
  // Find the event by its ID
  // Event.findByPk(eventID)
  //   .then((events) => {
  //     if (!events) {
  //       return res.status(404).json({ error: 'Event not found !!' });
  //     }

  //     // Return the event data in JSON format
  //     res.json(events);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).json({ error: 'An error occurred while fetching Event.' });
  //   });     
  try{
    const event= await Event.findByPk(eventID);
    if(!event){
      return res.status(404).json({error:'Event not found'});
    }
    res.json(event);
  } catch(error){
      console.log(error);
      res.status(500).json({ error: 'An error occurred while fetching Event.' });


  } 
}

// module.exports.updateEventById = (req, res) => {
//     const eventID = req.params.id;
//     const updatedData = req.body; // Assuming you send the updated data in the request body
  
//     // Find the event by its ID
//     Event.findByPk(eventID)
//       .then((events) => {
//         if (!events) {
//           return res.status(404).json({ error: 'Event not found !!' });
//         }
  
//         // Update the event's data
//         return events.update(updatedData);
//       })
//       .then((updatedevent) => {
//         // Return the updated event in JSON format
//         res.json(updatedevent);
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while updating the Event.' });
//       });
//   };

module.exports.updateEventById = async function (req, res) {
  const eventID = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const event = await Event.findByPk(eventID);

    if (!event) {
      return res.status(404).json({ error: 'Event not found !!' });
    }

    const updatedEvent = await event.update(updatedData);
    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the Event.' });
  }
};


// module.exports.deleteEvent = function(req,res){
//     const eventID = req.params.id;
//   // Find the event by its ID and delete it
//   Event.findByPk(eventID)
//     .then((events) => {
//       if (!events) {
//         return res.status(404).json({ error: 'Event not found !!' });
//       }

//       // Delete the event
//       return events.destroy();
//     })
//     .then(() => {
//       res.json({ message: 'Event deleted successfully' });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while deleting the Event.' });
//     });

// }

module.exports.deleteEvent = async function (req, res) {
  const eventID = req.params.id;

  try {
    const event = await Event.findByPk(eventID);

    if (!event) {
      return res.status(404).json({ error: 'Event not found !!' });
    }

    await event.destroy();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the Event.' });
  }
};
