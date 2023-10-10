
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Instructor = sequelize.define('Instructor',{
  id:{
    type:DataTypes.BIGINT,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  date:{
    type:DataTypes.DATE,
    allowNull:false
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false,
    
  }
},{
  tableName:'Instructors',
  timestamps:true
})

console.log('instructor model is created');


module.exports = Instructor;