const Member =require('../model/members');

//console.log('Member controller is loaded');
// id
// email


module.exports.createMember = async function(req,res){
  const { id,email} = req.body;

  if ( !email ) {
    const missingFields = [];

    if (!email) missingFields.push('Email');

    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const members = new Member({ id,email});
  try {
    await members.save();
    return res.json({ message: 'Member created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while saving the Member.' });
  }

}




module.exports.showMembers = async function (req, res) {
  try {
    const members = await Member.findAll();
    console.log(members);
    res.json(members);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while getting Members' });
  }
};

module.exports.showSingleMember = async function (req, res) {
  const memberId = req.params.id;

  try {
    const members = await Member.findByPk(memberId);

    if (!members) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Member.' });
  }
};

module.exports.updateMemberById = async (req, res) => {
  const memberId = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const members = await Member.findByPk(memberId);
    if (!members) {
      return res.status(404).json({ error: 'Member not found' });
    }

    const updatedMember = await members.update(updatedData);
    res.json(updatedMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the Member.' });
  }
}


module.exports.deleteMember = async function (req, res) {
  const memberId = req.params.id;

  try {
    const members = await Member.findByPk(memberId);

    if (!members) {
      return res.status(404).json({ error: 'Member not found' });
    }

    await members.destroy();
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the Member.' });
  }
};
