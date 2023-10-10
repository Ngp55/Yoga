
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Event = sequelize.define('Event',{
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
  date:{
    type:DataTypes.DATE,
    allowNull:false
  },
  url:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false,
    
  }
},{
  tableName:'Events',
  timestamps:true
})


console.log('events model is created');


module.exports = Event;