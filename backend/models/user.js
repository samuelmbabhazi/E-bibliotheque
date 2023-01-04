const Utilisateur = sequelize.define("utilisateur", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prenom: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mot_de_passe: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
