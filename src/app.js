import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
const Strategy = require("passport-http-bearer").Strategy;
import swaggerDoc from "swagger-ui-express";
import swaggerDocumentations from "./utils/documentation";
dotenv.config();

const app = express();

const port = 3001;

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASEURL_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());

app.use("/api", routes);
app.use("/documentation", swaggerDoc.serve);
app.use("/documentation", swaggerDoc.setup(swaggerDocumentations));

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});

export default app;
