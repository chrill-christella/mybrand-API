import express from "express";
import {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} from "./../src/controllers/article-controller";
import blogMiddleware from "./../src/middlewares/blogvalidation";
import { authGuard } from "./../src/middlewares/authGuard";

const router = express.Router();

// Create article
router.post("", authGuard, blogMiddleware, createArticle);

// Get all articles
router.get("/", getAllArticle);

// Get article by id
router.get("/:id", getArticle);

// Update article by id
router.patch("/:id", authGuard, blogMiddleware, updateArticle);

// Delete article by id
router.delete("/:id", authGuard, deleteArticle);

export default router;
