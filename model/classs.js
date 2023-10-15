
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

// _id
// name
// description
// img
// date
// fees
// duration
// schedule
// location
// level
// max_students
// class_size
// class_type
// instructor
// ratings
// reviews
// url

const Class = sequelize.define('Class',{
  id:{
    type:DataTypes.BIGINT,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true, // Ensure it's a valid URL
    }
  },
  date:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  fees:{
    type:DataTypes.DECIMAL(10,2),

  },
  duration:{
    type:DataTypes.INTEGER,

  },
  schedule:{
    type:DataTypes.STRING,

  },  
  location:{
    type:DataTypes.STRING,

  },  
  level:{
    type:DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced'),

  },  
  max_students:{
    type:DataTypes.INTEGER,

  },  
  class_size:{
    type:DataTypes.INTEGER,

  },  
  class_type:{
    type:DataTypes.ENUM('Online', 'In-Person'),

  },
  instructor:{
    type:DataTypes.STRING,

  },
  ratings:{
    type:DataTypes.DECIMAL(3,2),

  },
  reviews:{
    type:DataTypes.INTEGER,

  },
  url:{
    type:DataTypes.STRING,
    allowNull:false,
    validate: {
      isUrl: true, // Ensure it's a valid URL
    }
  },
},{
  tableName:'Classes',
  timestamps:true
})


console.log('events model is created');


module.exports = Class;