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
