const Book = require("../DB/model");
const authService=require("../Services/auth")
const asyncHandler = require("express-async-handler");


const userLogin = asyncHandler(async (req, res) => {
    try {
      const { userName, password } = req.body;
  
      const resp = await authService.webLoginService(userName, password);

      res.status(200).json(resp);
    } catch (e) {
      console.log("error @ login : ", e);
      throw { message: e.message, statusCode: 404 };
    }
});

const createBook = asyncHandler(async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        book.message="created"
        res.status(201).send(book);
    } catch (err) {
        res.status(400).send(err);
    }
});

const getBooks = asyncHandler(async (req, res) => {
    try {
        
        const books = await Book.find(req.query);
        res.send(books);
    } catch (err) {
        res.status(500).send(err);
    }
});

const getFilteredBooks = asyncHandler(async (req, res) => {
    try {
        const filter = {};
        if (req.query.author) {
            filter.author = req.query.author;
        }
        if (req.query.publicationYear) {
            filter.publicationYear = req.query.publicationYear;
        }

        const books = await Book.find(filter);
        res.send(books);
    } catch (err) {
        res.status(500).send(err);
    }
});

const getBookInfo = asyncHandler(async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
     
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

const updateBook = asyncHandler(async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        book.message="updated into"
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

const deleteBook = asyncHandler(async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        book.message="deleted"
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});




module.exports = {
    userLogin,
    createBook,
    getBooks,
    getBookInfo,
    deleteBook,
    updateBook,
    getFilteredBooks
}