const express = require("express");
const morgan = require("morgan");

const routerMain = require("./Routes/mainRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(routerMain);

module.exports = app;
