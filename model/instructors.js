
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const Instructor = sequelize.define('Instructor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensure it's a valid email address
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true, // Ensure it's a valid URL
    },
  },
  teaching_philosophy: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'Instructors', // Set the table name
  
});
console.log('instructor model is created');


module.exports = Instructor;