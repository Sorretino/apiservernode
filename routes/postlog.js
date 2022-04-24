// const express = require("express");
// const router = express.Router();
// const controller = require("../controller/SessionController");

const { Router } = require("express");
const controller = require("../Controllers/PostblogController");
const PostblogRoutes = new Router();
const routes = PostblogRoutes;
routes.get("/listaPosts", controller.index);
routes.post("/newpostblog", controller.store);
routes.get("/teste/:id", controller.filter);
routes.get("/fer/:idcategory", controller.filtercategorie);
module.exports = PostblogRoutes;
