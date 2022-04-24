// const express = require("express");
// const router = express.Router();
// const controller = require("../controller/SessionController");

const { Router } = require("express");
const controller = require("../Controllers/SessionController");
const SessionRoutes = new Router();
const routes = SessionRoutes;
routes.get("/lista", controller.index);
routes.post("/new", controller.store);

module.exports = SessionRoutes;
