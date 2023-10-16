
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const User = sequelize.define('User',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  displayName:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  role:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  
},{
  tableName:'Users',
  timestamps:false
})


console.log('User model is created');


module.exports = User;