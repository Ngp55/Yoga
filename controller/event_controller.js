const Event =require('../model/events');

//console.log('event controller is loaded');

// id
// name
// description
// date
// url
// image
module.exports.createEvent = function(req,res){
    const event = {
        id:req.body.id,
        name:req.body.name,
        description:req.body.description,
        date:req.body.date,
        url:req.body.url,
        image:req.body.image
    }
    
    const eventObj = Event.build(event);
    eventObj.save().then(() =>{
        res.status(201).json({ message: 'Event added successfully' });
    })
    .then((error) =>{
        console.log(error);
    })

}

module.exports.showEvents = function(req,res){
    Event.findAll().then((events) =>{
        console.log(events);
        
        res.json(events);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'An error occured while getting Events'});
        })
    }

module.exports.showSingleEvent = function(req,res){
    const eventID = req.params.id;
    //console.log(eventID);
  // Find the event by its ID
  Event.findByPk(eventID)
    .then((events) => {
      if (!events) {
        return res.status(404).json({ error: 'Event not found !!' });
      }

      // Return the event data in JSON format
      res.json(events);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching Event.' });
    });       
}

module.exports.updateEventById = (req, res) => {
    const eventID = req.params.id;
    const updatedData = req.body; // Assuming you send the updated data in the request body
  
    // Find the event by its ID
    Event.findByPk(eventID)
      .then((events) => {
        if (!events) {
          return res.status(404).json({ error: 'Event not found !!' });
        }
  
        // Update the event's data
        return events.update(updatedData);
      })
      .then((updatedevent) => {
        // Return the updated event in JSON format
        res.json(updatedevent);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the Event.' });
      });
  };
module.exports.deleteEvent = function(req,res){
    const eventID = req.params.id;
  // Find the event by its ID and delete it
  Event.findByPk(eventID)
    .then((events) => {
      if (!events) {
        return res.status(404).json({ error: 'Event not found !!' });
      }

      // Delete the event
      return events.destroy();
    })
    .then(() => {
      res.json({ message: 'Event deleted successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the Event.' });
    });

}