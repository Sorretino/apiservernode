const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../models/config/auth");
const router = express.Router();
const User = require("../models/User");
const { eAdmin } = require("../Midlewares/AuthMidleware");

router.get("/", eAdmin, async (req, res) => {
  User.findAll().then(function (users) {
    return res.json({
      erro: false,
      mensagem: "Usuario logado no sistema com sucesso",
      id_usuario_logado: req.user_id,
    });
  });
});

router.get("/tolist", (req, res) => {
  User.findAll().then(function (users) {
    return res.json(users);
  });
});

router.put("Del/:id", async function (req, res) {
  try {
    const dados = await User.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Usuario tualizado com sucesso!", dados: dados });
  } catch (err) {
    return res.status(500).json({ error: "Nada ainda moiado viadão" });
  }
});

router.post("/createUsers", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const users = await User.create(req.body);
    users.password = undefined;
    return res.status(200).json({
      message: "Usúario Cadastrado com sucesso",
      users: users,
      token: jwt.sign({ id: users.id }, config.secret, {
        expiresIn: config.expireIn,
      }),
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Erro ao tentar inserir usuario",
    });
  }
  //$2a$08$Nc11l7wPV5vYSDoOtSRQpOwop27AuqwtVq0TXWjc.i1X/zq5LSQ3C
  //   const password = await bcrypt.hash("1234", 8);
  //   console.log(password);
  //   return res.json({
  //     erro: false,
  //     mensagem: "cadastrado usuario",
  //   });
});

router.post("/login", async (req, res) => {
  //$2a$10$3liTYmHiIkqMNty.NlDCeuzSKTePcVQAgEx5sxqujwqBUMIy5JJZ2
  console.log(req.body);
  const user = await User.findOne({
    attributes: ["id", "name", "email", "password"],
    where: {
      email: req.body.email,
    },
  });
  if (user === null) {
    return res.status(400).json({
      erro: true,
      mensagem: "Usúario ou senha incorreta certo ?",
    });
  }

  // if (req.body.email != "fernando@gmail.com") {
  //   return res.status(400).json({
  //     erro: true,
  //     mensagem: "Erro dados incorreto",
  //   });
  // }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).json({
      erro: true,
      message: "Erro dados informado incorreto HASH",
    });
  }

  var token = jwt.sign(
    { id: user.id },
    config.secret,
    { expiresIn: config.expireIn },

    {
      // token: jwt.sign({ id: users.id }, config.secret, {
      //   expiresIn: config.expireIn,
      // }),
      //expiresIn: 600, //10 mnutos
      //expiresIn: "7d", // 7 dias
      token: token,
    }
  );
  return res.json({
    erro: false,
    name: user.name,
    email: user.email,
    password: user.password,
    token: token,
    mensagem: "Login realizado com sucesso",
  });
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
    const dadosdel = await User.update(req.body, {
      where: { id: req.params.id },
    });
    return res
      .status(201)
      .json({ message: "Usuario deletado com sucesso!", dadosdel: dadosdel });
  } catch (err) {
    return res.status(500).json({ error: "Error ao deletar esse Usúario! " });
  }
});

module.exports = router;
