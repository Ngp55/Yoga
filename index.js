

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./config/mysql');





// Middleware setup
//app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(express.static('./assets'));

// ------ EJS layouts ------//
// it is important to call expresslayouts before routes
app.use(expressLayouts);
// extracting style and scripts from sub pages in to the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// ------ EJS ------//
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

sequelize.sync()
      .then((result) => {
        console.log('Database is Okay');
      })
      .catch((error) =>{
        console.log(error);
      });

app.listen(port , function(error){
    if(error){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})