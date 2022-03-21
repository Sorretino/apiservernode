const express = require("express");
const router = express.Router();
const Inscrition = require("../models/inscrition");

router.get("/", (req, res) => {
  Inscrition.findAll().then(function (inscritions) {
    return res.json(inscritions);
  });
});

router.post("/", async (req, res) => {
  await Inscrition.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Inscrição  cadastrado com sucesso",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar novo Inscrição blog!",
      });
    });
});

router.delete("/:id", async function (req, res) {
  try {
    const dados = await Inscrition.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Inscrition deletado com sucesso!", dados: dados });
  } catch (err) {
    return res.status(500).json({ error: "Error ao deletar esse Post blog! " });
  }
});

module.exports = router;
