const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");

router.get("/", (req, res) => {
  Menu.findAll().then(function (menus) {
    return res.json(menus);
  });
});

router.post("/", async (req, res) => {
  await Menu.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Menu  cadastrado com sucesso",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar novo Menu blog!",
      });
    });
});

module.exports = router;
