const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const config = require("../models/config/auth");

module.exports = {
  eAdmin: async function (req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro , precisa fazer login para acessar a pagina ",
      });
    }
    const [, token] = authHeader.split(" ");
    console.log("token: " + token);
    if (!token) {
      return res.status(400).json({
        erro: true,
        mesagem:
          "Erro , precisa fazer login para acessar a pagina falta o token",
      });
    }
    // try validar token se existe
    try {
      const decoded = await promisify(jwt.verify)(token, config.secret);
      if (!decoded) {
        return res.status(401).json({
          error: true,
          code: 130,
          message: "O token está expirado!",
        });
      } else {
        req.user_id = decoded.id;
        req.user_type = decoded.user_type;
        next();
      }
    } catch {
      return res.status(401).json({
        error: true,
        code: 130,
        message: "O token está inválido errado!",
      });
    }
  },
};
