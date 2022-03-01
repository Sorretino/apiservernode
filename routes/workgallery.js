const express = require("express");
const router = express.Router();
const Workgallery = require("../models/workgallery");

router.get("/List", (req, res) => {
  Workgallery.findAll().then(function (works) {
    return res.json(works);
  });
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // res.send("Pagina cadastro");
  //console.log(req.body);
  await Workgallery.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Posts Galeria cadastrado com sucesso",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar novo Posts Galeria!",
      });
    });
});

router.delete("/:id", async function (req, res) {
  try {
    const dados = await Workgallery.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Post deletado com sucesso!", dados: dados });
  } catch (err) {
    return res.status(500).json({ error: "Error ao deletar esse Post blog! " });
  }
});

router.get("/", async function (req, res) {
  const LIMIT = 6;
  try {
    let { page = 1 } = req.query;
    page = parseInt(page - 1);
    const { count: size, rows: dados } = await Workgallery.findAndCountAll({
      limit: LIMIT,
      offset: page * LIMIT,
    });
    let pages = Math.ceil(size / LIMIT);
    return res.status(200).json({
      size,
      pages,
      actual: page + 1,
      dados,
    });
  } catch (err) {
    return res.status(500).json({ error: "Error tentar trazer paginação! " });
  }
});

module.exports = router;
