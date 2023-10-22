
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

// id
// name
// email
// message

const Message = sequelize.define('Message',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  message:{
    type:DataTypes.TEXT,
    allowNull:false,
    
  },
  
},{
  tableName:'Messages',
  timestamps:false
})


console.log('Message model is created');


module.exports = Message;