const Class = require('../model/class');

//console.log('class controller is loaded');

module.exports.createClass = async function(req,res){
  const { id,name,description,img,date,fees,duration,schedule,location,level,max_students,class_size,instructor,ratings,reviews,url } = req.body;

  if ( !name || !description || !img || !date || !fees || !duration || !schedule || !location || !level || !max_students || !class_size || !instructor || !ratings || !reviews || !url) {
    const missingFields = [];

    if (!name) missingFields.push('Name');
    if (!description) missingFields.push('Description');
    if (!img) missingFields.push('Image');
    if (!date) missingFields.push('Date');
    if (!fees) missingFields.push('Fees');
    if (!duration) missingFields.push('Duration');
    if (!schedule) missingFields.push('Schedule');
    if (!location) missingFields.push('Location');
    if (!level) missingFields.push('Level');
    if (!max_students) missingFields.push('Max students');
    if (!class_size) missingFields.push('Class size');
    if (!instructor) missingFields.push('Instructor');
    if (!ratings) missingFields.push('Ratings');
    if (!reviews) missingFields.push('Reviews');
    if (!url) missingFields.push('URL');

    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const DemoClass = new Class({ id,name,description,img,date,fees,duration,schedule,location,level,max_students,class_size,instructor,ratings,reviews,url });
  try {
    await DemoClass.save();
    return res.json({ message: 'Class created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while saving the Class.' });
  }

}




module.exports.showClasses = async function (req, res) {
  try {
    const classes = await Class.findAll();
    console.log(classes);
    res.json(classes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while getting Classes' });
  }
};

module.exports.showSingleClass = async function (req, res) {
  const classId = req.params.id;

  try {
    const classes = await Class.findByPk(classId);

    if (!classes) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Class.' });
  }
};

module.exports.updateClassById = async (req, res) => {
  const classId = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const classes = await Class.findByPk(classId);
    if (!classes) {
      return res.status(404).json({ error: 'Class not found' });
    }

    const updatedClass = await classes.update(updatedData);
    res.json(updatedClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the Class.' });
  }
}


module.exports.deleteClass = async function (req, res) {
  const classId = req.params.id;

  try {
    const classes = await Class.findByPk(classId);

    if (!classes) {
      return res.status(404).json({ error: 'Class not found' });
    }

    await classes.destroy();
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the Class.' });
  }
};

     