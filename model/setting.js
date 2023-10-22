const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

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


const Setting = sequelize.define('Setting',{
  id:{
    type:DataTypes.BIGINT,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  address:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hero_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  hero_text:{
    type:DataTypes.STRING,
    allowNull:false

  },
  about_text:{
    type:DataTypes.STRING,
    allowNull:false
  },
  gallery_image:{
    type:DataTypes.STRING,
    allowNull:false
  },  
  logo:{
    type:DataTypes.STRING,
    allowNull:false
  },  
  mission_text:{
    type:DataTypes.STRING,
    allowNull:false
  },  
},{
  tableName:'Settings',
  timestamps:false
})


console.log('Setting model is created');


module.exports = Setting;