const express = require("express");
const User = require("../models/User");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const rank = require("./session");
app.use(cors());

const db = require("../models/db");
app.use(express.json());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  console.log("Acessou o Middleware");
  res.header(
    "Access-Control-Request-Headers",
    "Origin, X-Requrested-With,Content-Type,Accept,Authorization"
  );
  res.header("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).send({});
  }
  app.use(cors());
  next();
});

app.use((req, res, next) => {
  console.log("Acessou o Middleware");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors());
  next();
});

//Rota teste controller
const postblogs = require("./postlog");
app.use("/postblog", postblogs);
//Rota PostBlog controller
const sessions = require("./session");
app.use("/inscritos", sessions);
//Rota menus
const rotaMenu = require("./menu");
app.use("/menu", rotaMenu);
//Rotas usuario
const rotaUsuario = require("./usuario");
app.use("/usuario", rotaUsuario);
//Rotas Posts
const rotaPost = require("./posts");
app.use("/blog", rotaPost);

//Rotas Galeria
const rotaworkGallery = require("./workgallery");
app.use("/gallery", rotaworkGallery);

//Rotas Inscritos no Blog
const rotaInscritos = require("./inscrition");
app.use("/inscritos", rotaInscritos);

// // final rotas

// app.get("/", async (req, res) => {
//   res.send("Pagina inicial da Api Sorrentino ");
// });

// app.use("/", (req, res, next) => {
//   res.status(200).send({
//     mensagem: "Ok server ok, deu certo",
//   });
// });
// app.get("/", async (req, res) => {
//   res.send("Pagina inicial da Api Sorrentino React Dark");
// });

// app.get("/list", (req, res) => {
//   User.findAll().then(function (users) {
//     return res.json(users);
//   });
// });
// app.put("/upd", (req, res) => {
//   User.findAll().then(function (users) {
//     return res.json(users);
//   });
// });

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

// app.post("/cadastrar", async (req, res) => {
//   // console.log(req.body);
//   // res.send("Pagina cadastro");
//   //console.log(req.body);
//   await User.create(req.body)
//     .then(() => {
//       return res.json({
//         erro: false,
//         mensagem: "Usuário cadastrado com sucesso",
//       });
//     })
//     .catch(() => {
//       return res.status(400).json({
//         erro: true,
//         mensagem: "Erro ao cadastrar novo usuário!",
//       });
//     });
// });

// app.listen(3000, () => {
//   console.log("Servidor iniciado na porta 3000");
// });

module.exports = app;
