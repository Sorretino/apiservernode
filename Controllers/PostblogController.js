//index: listagem de sessios todos
//store : criar uma session
//show; quando queremos listar uma unica session
//destroy: deleção da session
//update alterer a session

const Postblog = require("../models/postblog");

class PostblogController {
  async index(req, res) {
    try {
      const postblogs = await Postblog.findAll();
      return res.status(200).json({
        postblogs: postblogs,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao tentar listar tipos",
      });
    }
  }
  async filtercategorie(req, res) {
    try {
      const { idcategory } = req.params;
      const postblogs = await Postblog.findAll({
        where: { idcategory: idcategory },
      });
      return res.status(200).json({
        postblogs: postblogs,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao tentar listar tipos",
      });
    }
  }

  async filter(req, res) {
    try {
      const { id } = req.params;
      const postfilters = await Postblog.findByPk(id, {
        where: { id: req.params.id },
      });

      return res.status(200).json({
        message: "Post filter sucesso",
        postfilters: postfilters,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao tentar esse PostBlog por id",
      });
    }
  }
  // app.put("/clientes/:id", async function (req, res) {
  //   try {
  //     const dados = await User.update(req.body, {
  //       where: { id: req.params.id },
  //     });
  //     return res
  //       .status(201)
  //       .json({ message: "Atualizado com sucesso!", dados: dados });
  //   } catch (err) {
  //     return res.status(500).json({ error: "Nada ainda moiado viadão" });
  //   }
  // });
  async store(req, res) {
    try {
      if (
        !req.body.title ||
        typeof req.body.title == undefined ||
        (req.body.title == null && !req.body.title) ||
        typeof req.body.title == undefined ||
        req.body.title == null
      ) {
        return res.status(500).json({
          message: "Campos invalidos ",
        });
      } else {
        const info = await Postblog.create(req.body);
        return res.status(200).json({
          message: "Post do Blog com sucesso",
          info: info,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro  impossivel cadastrar postblog",
      });
    }
  }
}
module.exports = new PostblogController();
