
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,

  }
}, {
  tableName: 'Events',
  
})


console.log('events model is created');


module.exports = Event;