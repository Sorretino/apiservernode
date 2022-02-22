const express = require("express");
const User = require("./models/User");
const app = express();

const db = require("./models/db");
app.use(express.json());

//Rotas usuario
const rotaUsuario = require("./routes/usuario");
app.use("/usuario", rotaUsuario);
//Rotas Posts
const rotaPost = require("./routes/posts");
app.use("/post", rotaPost);
// final rotas
app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requrested-with,Content-Type,Accep,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).send({});
  }
  this.app.use(cors());
  next();
});

app.get("/", async (req, res) => {
  res.send("Pagina inicial da Api Sorrentino ");
});

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
