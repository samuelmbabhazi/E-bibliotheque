const express = require("express");
const { createBook, getBooks } = require("../controllers/book.controllers");

const bookRoute = express.Router();

bookRoute.post("/upload", createBook);
bookRoute.get("/allbooks", getBooks);

export default bookRoute;
