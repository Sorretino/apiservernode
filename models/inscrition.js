const Sequelize = require("sequelize");

const db = require("./db");

const Incrition = db.define("inscritions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//Incrition.sync();
// verifica se tive alteração da tabela
//Incrition.sync({ alter: true });
module.exports = Incrition;
