const Book = require("../models/book");

const createBook = async (req, res, next) => {
  try {
    const { title, author, publisher, resume, publicationDate, pdf } = req.body;
    const data = {
      title,
      author,
      publisher,
      resume,
      publicationDate,
      pdf,
    };
    const book = await Book.create(data);

    if (book) {
      res.status(200).json({ message: "Telecharger avec succes" });
    }
    res.json({ message: "Erreur de telechacgement" });
  } catch (error) {
    next(error);
  }
};
const getBooks = async (_, res, next) => {
  try {
    const allBooks = await Book.findAll();
    res.status(200).json({ allBooks });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBooks,
};
