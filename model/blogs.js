
const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

//const cors = require('cors');
// id
// title
// description
// date
// image


const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  meta_tag: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true, // Ensure it's a valid URL
    },
  }
},
  {
    tableName: 'Blogs', // Set the table name
    
  }
);


console.log('blog model is created');

module.exports = Blog;