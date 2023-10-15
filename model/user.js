
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const User = sequelize.define('User',{
  
  Email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  displayName:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  
},{
  tableName:'Users',
  timestamps:true
})


console.log('User model is created');


module.exports = User;