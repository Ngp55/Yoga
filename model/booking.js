
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

//Email, displayName, classId

const Booking = sequelize.define('Booking',{
  
  Email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  displayName:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  classId:{
    type:DataTypes.STRING,
    allowNull:false,
    
  }
  
},{
  tableName:'Bookings',
  timestamps:true
})


console.log('Booking model is created');


module.exports = Booking;