const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "u231026870_DarkBlogDb",
  "u231026870_DarkBlogDb",
  "ThemerBlogfull2022",
  {
    host: "31.220.104.197",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(function () {
    console.log("Sucesso conexão com o banco estavel nesse momento");
  })
  .catch(function () {
    console.log("Erro conexão com o db");
  });
module.exports = sequelize;

// process.env["NODE_ENV"] = "production";
