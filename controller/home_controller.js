

// module.exports.home = function(res, req){
//     return res.render('home',{
//         title: "Home",
//     });
// }
// const Book = require('../model/book'); // Import the Book model

// // Example: Create a new book entry
// Book.create({
//   title: 'Sample Book',
//   author: 'Sample Author',
//   release_date: '2023-10-07', // Replace with the actual release date
//   subject: 123, // Replace with the actual subject
// })
//   .then((book) => {
//     console.log('New book created:', book.toJSON());
//   })
//   .catch((err) => {
//     console.error('Error creating book:', err);
//   });

// You can perform other CRUD operations (read, update, delete) using the Book model as well.
//console.log('home controller is loaded');

module.exports.home = function(req,res){
    res.render('home',{
        title:'Home Page ',
        
    })
};