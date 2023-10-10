
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'Experi',
//     password: 'admin@1122'
// });
 
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
// });

const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize('yoga', 'Experi', 'admin@1122', {
  host: 'localhost', // Change this to your database host if it's different
  dialect: 'mysql',
});



module.exports = sequelize;