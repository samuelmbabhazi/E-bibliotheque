const express = require("express");
const {
  createBook,
  getBooks,
  downloadPdf,
} = require("../controllers/book.controllers");
const upload = require("../config/multer.config");

const bookRoute = express.Router();

bookRoute.post("/upload", upload.single("pdf"), createBook);
bookRoute.get("/allbooks", getBooks);
bookRoute.get("/download/:id", downloadPdf);

module.exports = bookRoute;
