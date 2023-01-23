

const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

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
