// import express from "express";
// import welcome from "./welcome-routes";
// import article from "./article-routes";
// import userMessages from "./userMessages-routes";
const express = require("express");
const welcome = require("./welcome-routes");
const article = require("./articles-routes");
const userMessages = require("./userMessages-routes");
const user = require("./user-routes");

const router = express.Router();

router.use("/", welcome);
router.use("/article", article);
router.use("/userMessages", userMessages);
router.use("/user", user);

module.exports = router;
