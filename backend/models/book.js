const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Book extends Sequelize.Model {}
  Book.init(
    {
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
        allowNull: false,
      },
      pdf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "book",
    }
  );

  return Book;
};
