//index: listagem de sessios todos
//store : criar uma session
//show; quando queremos listar uma unica session
//destroy: deleção da session
//update alterer a session

const Inscritons = require("../models/sessions");

class SessionController {
  async index(req, res) {
    try {
      const inscrits = await Inscritons.findAll();
      return res.status(200).json({
        inscrits: inscrits,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao tentar listar tipos",
      });
    }
  }

  async store(req, res) {
    try {
      if (
        !req.body.name ||
        typeof req.body.nome == undefined ||
        (req.body.name == null && !req.body.email) ||
        typeof req.body.email == undefined ||
        req.body.email == null
      ) {
        return res.status(500).json({
          message: "Campos invalidos ",
        });
      } else {
        const info = await Inscritons.create(req.body);
        return res.status(200).json({
          message: "Inscrito com sucesso",
          info: info,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro  impossivel cadastrar inscrito",
      });
    }
  }
}
module.exports = new SessionController();
