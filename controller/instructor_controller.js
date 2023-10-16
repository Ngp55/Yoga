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


module.exports.createInstructor = async function(req,res){
    const { id,name,specialization,bio,email,phone,image,teaching_philosophy} =req.body;

    if (!name || !specialization || !bio || !email || !phone || !image || !teaching_philosophy ) {
      const missingFields = [];
  
      if (!name) missingFields.push('Name');
      if (!specialization) missingFields.push('Specialization');
      if (!bio) missingFields.push('Bio');
      if (!email) missingFields.push('Email');
      if (!phone) missingFields.push('Phone');
      if (!image) missingFields.push('Image');
      if (!teaching_philosophy) missingFields.push('Teaching Philosophy');
  
      const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
      return res.json({ message: missingFieldMessage });
    }
    const instructor = new Instructor({ id,name,specialization,bio,email,phone,image,teaching_philosophy });
    
    try{
      await instructor.save();
    return res.json({ message: 'Instructor created successfully' });

    } catch(error){
    return res.status(500).json({ message: 'An error occurred while saving the Instructor.' });

    }

}


module.exports.showInstructors = async function(req,res){
    try{
        const instructors = await Instructor.findAll();
        console.log(instructors);
        res.json(instructors);
    } catch(error){
      res.status(500).json({error: 'An error occured while getting Instructors'});
    }
}

// module.exports.showSingleInstructor = function(req,res){
//     const instructorId = req.params.id;
//     //console.log(instructorId);
//   // Find the instructor by its ID
//   Instructor.findByPk(instructorId)
//     .then((instructors) => {
//       if (!instructors) {
//         return res.status(404).json({ error: 'Instructor not found' });
//       }

//       // Return the instructor data in JSON format
//       res.json(instructors);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching Instructor.' });
//     });       
// }

module.exports.showSingleInstructor = async function (req, res) {
  try {
    const instructorId = req.params.id;
    // Find the instructor by its ID
    const instructor = await Instructor.findByPk(instructorId);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    // Return the instructor data in JSON format
    res.json(instructor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Instructor.' });
  }
};

// module.exports.updateInstructorById = (req, res) => {
//     const instructorId = req.params.id;
//     const updatedData = req.body; // Assuming you send the updated data in the request body
  
//     // Find the instructor by its ID
//     Instructor.findByPk(instructorId)
//       .then((instructors) => {
//         if (!instructors) {
//           return res.status(404).json({ error: 'Instructor not found' });
//         }
  
//         // Update the instructor's data
//         return instructors.update(updatedData);
//       })
//       .then((updatedInstructor) => {
//         // Return the updated instructor in JSON format
//         res.json(updatedInstructor);
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while updating the Instructor.' });
//       });
//   };

module.exports.updateInstructorById = async function (req, res) {
  try {
    const instructorId = req.params.id;
    const updatedData = req.body; // Assuming you send the updated data in the request body

    // Find the instructor by its ID
    const instructor = await Instructor.findByPk(instructorId);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    // Update the instructor's data
    const updatedInstructor = await instructor.update(updatedData);

    // Return the updated instructor in JSON format
    res.json(updatedInstructor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the Instructor.' });
  }
};


// module.exports.deleteInstructor = function(req,res){
//     const instructorId = req.params.id;
//   // Find the instructor by its ID and delete it
//   Instructor.findByPk(instructorId)
//     .then((instructors) => {
//       if (!instructors) {
//         return res.status(404).json({ error: 'Instructor not found' });
//       }

//       // Delete the instructor
//       return instructors.destroy();
//     })
//     .then(() => {
//       res.json({ message: 'Instructor deleted successfully' });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while deleting the Instructor.' });
//     });

// }

module.exports.deleteInstructor = async function (req, res) {
  try {
    const instructorId = req.params.id;

    // Find the instructor by its ID and delete it
    const instructor = await Instructor.findByPk(instructorId);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    // Delete the instructor
    await instructor.destroy();

    res.json({ message: 'Instructor deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the Instructor.' });
  }
};
