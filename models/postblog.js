const Sequelize = require("sequelize");

const db = require("./db");

const Postblog = db.define("postblog", {
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
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlimage: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  idcategory: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//Postblog.sync();
// verifica se tive alteração da tabela
//Postblog.sync({ alter: true });
module.exports = Postblog;
