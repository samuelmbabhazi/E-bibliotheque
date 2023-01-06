const { Book } = require("../models/book");

const createBook = (req, res, next) => {
  try {
    const { title, author, publisher, resume, publicationDate } = req.body;

    const data = {
      title,
      author,
      publisher,
      resume,
      publicationDate,
      pdf: req.file.buffer,
    };
    const book = Book.create(data);

    if (book) {
      res.status(200).json("Telecharger avec succes");
    }
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
const downloadPdf = (req, res) => {
  Book.findByPk(req.params.id)
    .then((pdf) => {
      const pdfContents = Buffer.from(pdf.data, "base64");
      const readStream = new stream.PassThrough();
      readStream.end(pdfContents);

      res.set("Content-disposition", "attachment; filename=" + pdf.title);
      res.set("Content-Type", pdf.type);

      readStream.pipe(res);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Error", detail: err });
    });
};

module.exports = {
  createBook,
  getBooks,
  downloadPdf,
};
