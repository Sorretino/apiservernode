const Sequelize = require("sequelize");
const db = require("./db");

const Menus = db.define("menus", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//Menus.sync();
// verifica se tive alteração da tabela
//User.sync({ alter: true });
module.exports = Menus;
