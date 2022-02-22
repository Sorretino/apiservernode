const express = require("express");
const router = express.Router();

// app.get("/", async (req, res) => {
//   res.send("Pagina inicial da Api Sorrentino");
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

module.exports = router;
