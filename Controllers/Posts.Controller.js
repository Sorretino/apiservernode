const Post = require("../models/post");
const db = require("../models/db");
class PostsController {
  //Listar
  async index(req, res) {
    try {
      const posts = await Post.findAll();
      return res.status(200).json({
        posts: posts,
        message: "Conectado ao Post Blog",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao tentar listar albuns",
      });
    }
  }
}

module.exports = new PostsController();
