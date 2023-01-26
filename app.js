import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const Strategy = require("passport-http-bearer").Strategy;
dotenv.config();

const app = express();

const port = 3001;

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
