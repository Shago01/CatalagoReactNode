const { Router } = require("express");
const routerProduct = require("./productsRouter");
const routerUser = require("./usersRouter");

const routerMain = Router();

routerMain.use("/products", routerProduct);
routerMain.use("/user", routerUser);

module.exports = routerMain;
