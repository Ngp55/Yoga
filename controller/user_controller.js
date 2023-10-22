const User =require('../model/user');

//console.log('User controller is loaded');
// id
// email
// displayName
// role

module.exports.createUser = async function(req,res){
  const { id,email,displayName,role} = req.body;

  if ( !email || !displayName || !role ) {
    const missingFields = [];

    if (!email) missingFields.push('Email');
    if (!displayName) missingFields.push('Display Name');
    if (!role) missingFields.push('Role')

    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const users = new User({ id,email,displayName,role});
  try {
    await users.save();
    return res.json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while saving the User.' });
  }

}




module.exports.showUsers = async function (req, res) {
  try {
    const users = await User.findAll();
    console.log(users);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while getting Users' });
  }
};

module.exports.showSingleUser = async function (req, res) {
  const userId = req.params.id;

  try {
    const users = await User.findByPk(userId);

    if (!users) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching User.' });
  }
};

module.exports.updateUserById = async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const users = await User.findByPk(userId);
    if (!users) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updateduser = await users.update(updatedData);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the User.' });
  }
}


module.exports.deleteUser = async function (req, res) {
  const userId = req.params.id;

  try {
    const users = await User.findByPk(userId);

    if (!users) {
      return res.status(404).json({ error: 'User not found' });
    }

    await users.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the User.' });
  }
};
