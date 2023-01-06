const { Book } = require("../models/book");

const createBook = (req, res, next) => {
  try {
    const { title, author, publisher, resume, publicationDate } = req.body;
    const { pdf } = req.file.buffer;
    const data = {
      title,
      author,
      publisher,
      resume,
      publicationDate,
      pdf,
    };
    const book = Book.create(data);

    if (book) {
      res.status(200).json("Telecharger avec succes");
    }
  } catch (error) {
    next(error);
  }
};
const getBooks = (_, res, next) => {
  try {
    const allBooks = Book.findAll();
    res.status(200).json({ allBooks });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBooks,
};
