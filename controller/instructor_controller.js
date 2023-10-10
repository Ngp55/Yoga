const Instructor =require('../model/instructors');

//console.log('Instructor controller is loaded');

// id
// name
// specialization
// bio
// email
// phone
// image
// teaching_philosophy

module.exports.createInstructor = function(req,res){
    const instructors = {
      id:req.body.id,
      name:req.body.name,
      specialization:req.body.specialization,
      bio:req.body.bio,
      email:req.body.email,
      phone:req.body.phone,
      image:req.body.image,
      teaching_philosophy:req.body.teaching_philosophy
    }
    
    const instructorObj = Instructor.build(instructors);
    instructorObj.save().then(() =>{
        res.status(201).json({ message: 'Instructor added successfully' });
    })
    .then((error) =>{
        console.log(error);
    })

}


module.exports.showInstructors = function(req,res){
    Instructor.findAll().then((instructors) =>{
        console.log(instructors);
        
        res.json(instructors);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'An error occured while getting Instructors'});
        })
    }

module.exports.showSingleInstructor = function(req,res){
    const instructorId = req.params.id;
    //console.log(instructorId);
  // Find the instructor by its ID
  Instructor.findByPk(instructorId)
    .then((instructors) => {
      if (!instructors) {
        return res.status(404).json({ error: 'Instructor not found' });
      }

      // Return the instructor data in JSON format
      res.json(instructors);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching Instructor.' });
    });       
}

module.exports.updateInstructorById = (req, res) => {
    const instructorId = req.params.id;
    const updatedData = req.body; // Assuming you send the updated data in the request body
  
    // Find the instructor by its ID
    Instructor.findByPk(instructorId)
      .then((instructors) => {
        if (!instructors) {
          return res.status(404).json({ error: 'Instructor not found' });
        }
  
        // Update the instructor's data
        return instructors.update(updatedData);
      })
      .then((updatedInstructor) => {
        // Return the updated instructor in JSON format
        res.json(updatedInstructor);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the Instructor.' });
      });
  };
module.exports.deleteInstructor = function(req,res){
    const instructorId = req.params.id;
  // Find the instructor by its ID and delete it
  Instructor.findByPk(instructorId)
    .then((instructors) => {
      if (!instructors) {
        return res.status(404).json({ error: 'Instructor not found' });
      }

      // Delete the instructor
      return instructors.destroy();
    })
    .then(() => {
      res.json({ message: 'Instructor deleted successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the Instructor.' });
    });

}
