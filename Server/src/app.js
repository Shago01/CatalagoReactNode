const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routerMain = require("./Routes/mainRouter");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerMain);

module.exports = app;
