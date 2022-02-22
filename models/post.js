const Sequelize = require("sequelize");
const db = require("./db");

const Posts = db.define("posts", {
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
});
//Posts.sync();
// verifica se tive alteração da tabela
//User.sync({ alter: true });
module.exports = Posts;
