
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

//Email, displayName, classId

const Booking = sequelize.define('Booking',{
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email:{
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