const Sequelize = require("sequelize");
const express = require("express");

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.sync({ alter: true }).then(() => {
  console.log("db has been sync");
});

const Book = sequelize.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publisher: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resume: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  publicationDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  pdf: {
    type: Sequelize.BLOB("long"),
    allowNull: true,
  },
});
module.exports = { Book, sequelize };
