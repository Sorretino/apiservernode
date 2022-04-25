const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "seubanco",
  "seuUser",
  "Password",
  {
    host: "IP.SERVER",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(function () {
    console.log("Sucesso conexão com o Servidor estavel nesse momento");
  })
  .catch(function () {
    console.log("Erro conexão com o db");
  });
module.exports = sequelize;

// process.env["NODE_ENV"] = "production";
