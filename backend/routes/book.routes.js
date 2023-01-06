const express = require("express");
const { createBook, getBooks } = require("../controllers/book.controllers");
const upload = require("../config/multer.config");

const bookRoute = express.Router();

bookRoute.post("/upload", upload.single("pdf"), createBook);
bookRoute.get("/allbooks", getBooks);

module.exports = bookRoute;
