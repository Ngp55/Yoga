const Setting = require('../model/setting');

//console.log('Setting controller is loaded');
// id
// email
// address
// number
// hero_title
// hero_text
// about_text
// gallery_image
// logo
// mission_text

module.exports.createSetting = async function(req,res){
  const { id,email,address,number,hero_title,hero_text,about_text,gallery_image,logo,mission_text } = req.body;

  if ( !email || !address || !number || !hero_title || !hero_text || !about_text || !gallery_image || !logo || !mission_text ) {
    const missingFields = [];

    if (!email) missingFields.push('Email');
    if (!address) missingFields.push('Address');
    if (!number) missingFields.push('Number');
    if (!hero_title) missingFields.push('Hero Title');
    if (!hero_text) missingFields.push('Hero Text');
    if (!about_text) missingFields.push('About Text');
    if (!gallery_image) missingFields.push('Gallery Image');
    if (!logo) missingFields.push('Logo');
    if (!mission_text) missingFields.push('Mission Text');
    
    const missingFieldMessage = `Please provide : ${missingFields.join(', ')}`;
    return res.json({ message: missingFieldMessage });
  }
  const DemoSetting = new Setting({ id,email,address,number,hero_title,hero_text,about_text,gallery_image,logo,mission_text });
  try {
    await DemoSetting.save();
    return res.json({ message: 'Setting created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while saving the Setting.' });
  }

}




module.exports.showSettinges = async function (req, res) {
  try {
    const Settings = await Setting.findAll();
    console.log(Settings);
    res.json(Settings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while getting Settinges' });
  }
};

module.exports.showSingleSetting = async function (req, res) {
  const settingId = req.params.id;

  try {
    const settings = await Setting.findByPk(settingId);

    if (!settings) {
      return res.status(404).json({ error: 'Setting not found' });
    }

    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Setting.' });
  }
};

module.exports.updateSettingById = async (req, res) => {
  const settingId = req.params.id;
  const updatedData = req.body; // Assuming you send the updated data in the request body

  try {
    const settings = await Setting.findByPk(settingId);
    if (!settings) {
      return res.status(404).json({ error: 'Setting not found' });
    }

    const updatedsetting = await settings.update(updatedData);
    res.json(updatedsetting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the Setting.' });
  }
}


module.exports.deleteSetting = async function (req, res) {
  const settingId = req.params.id;

  try {
    const settings = await Setting.findByPk(settingId);

    if (!settings) {
      return res.status(404).json({ error: 'Setting not found' });
    }

    await settings.destroy();
    res.json({ message: 'Setting deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the Setting.' });
  }
};

     