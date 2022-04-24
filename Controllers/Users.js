const User = require("../models/User");

class UsersController {
  //Listar
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json({
        users: users,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao tentar listar usuarios",
      });
    }
  }

  //Create Usuario
  async index(req, res) {
    try {
      await User.create(req.body);
      return res.status(200).json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao tentar cadastrar usuario",
      });
    }
  }

  //Update Usuario
  async index(req, res) {
    try {
      const dados = await User.update(req.body, {
        where: { id: req.params.id },
      });
      return res
        .status(201)
        .json({ message: "Atualizado com sucesso!", dados: dados });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao tentar Alterar usuario",
      });
    }
  }
}

module.exports = new UsersController();
