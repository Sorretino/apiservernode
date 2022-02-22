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

// require("dotenv/config");
// module.exports = {
//   dialect: process.env.DB_DIALECT || "mysql",
//   host: process.env.DB_HOST || "localhost",
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_DATABASE || "apidarkbd",
//   logging: false,
//   define: {
//     timestamps: true,
//     underscored: true,
//     // logging: process.env.DEBUG || false,
//   },
// };

process.env["NODE_ENV"] = "production";
