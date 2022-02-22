const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.findAll().then(function (users) {
    return res.json(users);
  });
});

router.put(":id", async function (req, res) {
  try {
    const dados = await User.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Atualizado com sucesso!", dados: dados });
  } catch (err) {
    return res.status(500).json({ error: "Nada ainda moiado viadão" });
  }
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // res.send("Pagina cadastro");
  //console.log(req.body);
  await User.create(req.body)
    .then(() => {
      return res.json({
        mensagem: "Usuário cadastrado com sucesso",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar novo usuário!",
      });
    });
});

router.delete("/:id", async function (req, res) {
  try {
    const dadosdel = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Post deletado com sucesso!", dadosdel: dadosdel });
  } catch (err) {
    return res.status(500).json({ error: "Error ao deletar esse Post blog! " });
  }
});

module.exports = router;
