
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
    // validate: {
    //   isUrl: true, // Ensure it's a valid URL
    // }
  },
  date:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  fees:{
    type:DataTypes.FLOAT,
    allowNull:false

  },
  duration:{
    type:DataTypes.STRING,
    allowNull:false
  },
  schedule:{
    type:DataTypes.STRING,
    allowNull:false
  },  
  location:{
    type:DataTypes.STRING,
    allowNull:false
  },  
  level:{
    type:DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced'),
    allowNull:false
  },  
  max_students:{
    type:DataTypes.INTEGER,
    allowNull:false
  },  
  class_size:{
    type:DataTypes.INTEGER,
    allowNull:false
  },  
  instructor:{
    type:DataTypes.STRING,
    allowNull:false
  },
  ratings:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  reviews:{
    type:DataTypes.STRING,
    allowNull:false
  },
  url:{
    type:DataTypes.STRING,
    allowNull:false,
    // validate: {
    //   isUrl: true, // Ensure it's a valid URL
    // }
  },
},{
  tableName:'Classes',
  timestamps:false
})


console.log('Class model is created');


module.exports = Class;