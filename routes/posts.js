const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//Listar to
router.get("/List", (req, res) => {
  Post.findAll().then(function (posts) {
    return res.json(posts);
  });
});

//Update
router.put(":id", async function (req, res) {
  try {
    const dados = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Atualizado Post blog com sucesso!", dados: dados });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error para atualizar esse Post blog! " });
  }
});

//Create
router.post("/", async (req, res) => {
  // console.log(req.body);
  // res.send("Pagina cadastro");
  //console.log(req.body);
  await Post.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Posts blog cadastrado com sucesso",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar novo Posts blog!",
      });
    });
});

//Deleção
router.delete("/:id", async function (req, res) {
  try {
    const dados = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Post deletado com sucesso!", dados: dados });
  } catch (err) {
    return res.status(500).json({ error: "Error ao deletar esse Post blog! " });
  }
});

//paginação
router.get("/", async function (req, res) {
  const LIMIT = 6;
  try {
    let { page = 1 } = req.query;
    page = parseInt(page - 1);
    const { count: size, rows: dados } = await Post.findAndCountAll({
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
