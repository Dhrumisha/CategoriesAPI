const express = require("express");
const app = express();
const categoryRouter = require("./Routes/categoriesRoute")

app.use(express.json());

app.use("/api/v1/categories",categoryRouter)

module.exports = app;