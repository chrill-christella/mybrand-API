//import Article from "../models/articles-model";

const Article = require("./../models/articles-model");

async function createArticle(req, res, next) {
  try {
    const createdArticle = await Article.create(req.body);
    res.status(201).json({
      status: 201,
      message: "Article created successfully",
      data: createdArticle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}

async function getArticle(req, res, next) {
  try {
    const article = await Article.findById({ _id: req.params.id });
    res.status(200).json({
      status: 200,
      message: "Article created successfully",
      data: article,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}

async function getAllArticle(req, res, next) {
  try {
    const articles = await Article.find();
    res.status(200).json({
      status: 200,
      message: "All Articles retrieved successfully",
      data: articles,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}

async function updateArticle(req, res, next) {
  try {
    await Article.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(200)
      .json({ status: 200, message: "Article updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function deleteArticle(req, res, next) {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Article deleted successfully",
      data: req.params.id,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
};
