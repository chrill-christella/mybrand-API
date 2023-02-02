import express from "express";
import routes from "./../src/routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const Strategy = require("passport-http-bearer").Strategy;
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentations from "./utils/documentation";
dotenv.config();

// const express = require("express");
// const routes = require("./routes");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
//require("dotenv").config();

const app = express();

const port = 3001;

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use("/api", routes);
app.use("/documentation", swaggerDoc.serve);
app.use("/documentation", swaggerDoc.setup(swaggerDocumentations));

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
