const express = require("express");
const Sequelize = require("sequelize");
const dotenv = require("dotenv").config();

const bookRoute = require("./routes/book.routes");

const PORT = process.env.PORT || 8080;
const app = express();
const baseUrl = "/api/users";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected to findjob");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.use(baseUrl, bookRoute);

app.listen(PORT, () => console.log(`Server is connected ${PORT}`));
