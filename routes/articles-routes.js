// import express from "express";

// import {
//   createArticle,
//   getAllArticle,
//   getArticle,
//   updateArticle,
//   deleteArticle,
// } from "./../controllers/article-controller";
// import blogMiddleware from "./../middlewares/blogvalidation";

const express = require("express");
const {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("./../src/controllers/article-controller");
//const blogMiddleware = require("./../middlewares/blogvalidation");

const router = express.Router();

// Create article
router.post("", createArticle);

// Get all articles
router.get("/", getAllArticle);

// Get article by id
router.get("/:id", getArticle);

// Update article by id
router.patch("/:id", updateArticle);

// Delete article by id
router.delete("/:id", deleteArticle);

module.exports = router;
