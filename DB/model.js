const mongoose = require("../DB/auth");

// Book model
const Book = mongoose.model('Book', {
    title: String,
    author: String,
    publicationYear: Number
  });




module.exports = Book;