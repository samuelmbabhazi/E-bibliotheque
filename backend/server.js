const express = require("express");
const Sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const connectionMiddleware = require("./config/connection");
const bookRoute = require("./routes/book.routes");

const PORT = process.env.PORT || 8080;
const app = express();
const baseUrl = "/api/book";

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

// app.use(
//   connectionMiddleware({
//     user: "postgres",
//     host: "localhost",
//     database: "findjob",
//     password: "postgres",
//     port: 5432,
//   })
// );

app.use(baseUrl, bookRoute);

app.listen(PORT, () => console.log(`Server is connected ${PORT}`));
