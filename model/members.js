
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

// id
// email

const Member = sequelize.define('Member',{
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
},{
  tableName:'Members',
  timestamps:false
})


console.log('Member model is created');


module.exports = Member;