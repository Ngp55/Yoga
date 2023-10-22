const Messages =require('../model/messages');

//console.log('Message controller is loaded');
// id
// name
// email
// message

module.exports.createMessage = async function(req,res){
  const { id,email,name,message} = req.body;

  if ( !email || !name || !message ) {
    const missingFields = [];

    if (!email) missingFields.push('Email');
    if (!name) missingFields.push('Name');
    if (!message) missingFields.push('Message')

    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const messages = new Messages({ id,email,name,message});
  try {
    await messages.save();
    return res.json({ message: 'Message created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while saving the Message.' });
  }

}




module.exports.showMessages = async function (req, res) {
  try {
    const messages = await Messages.findAll();
    console.log(messages);
    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while getting Messages' });
  }
};

module.exports.showSingleMessage = async function (req, res) {
  const messageId = req.params.id;

  try {
    const messages = await Messages.findByPk(messageId);

    if (!messages) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Message.' });
  }
};

module.exports.updateMessageById = async (req, res) => {
  const messageId = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const messages = await Messages.findByPk(messageId);
    if (!messages) {
      return res.status(404).json({ error: 'Message not found' });
    }

    const updatedMessage = await messages.update(updatedData);
    res.json(updatedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the Message.' });
  }
}


module.exports.deleteMessage = async function (req, res) {
  const messageId = req.params.id;

  try {
    const messages = await Messages.findByPk(messageId);

    if (!messages) {
      return res.status(404).json({ error: 'Message not found' });
    }

    await messages.destroy();
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the Message.' });
  }
};
