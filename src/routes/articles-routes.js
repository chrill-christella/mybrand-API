import express from "express";
import { authGuard } from "../middlewares/authGuard";
import {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} from "./../controllers/article-controller";
import {
  createArticleValidation,
  updateArticleValidation,
} from "../Validation/article/create-article.validation";
import fileFilter from "../utils/fileFilter";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({});
const uploads = multer({ storage, fileFilter });

// Create article
router.post(
  "",
  authGuard,
  uploads.single("picture"),
  createArticleValidation,
  createArticle
);

// Get all articles
router.get("/", getAllArticle);

// Get article by id
router.get("/getOneArticle/:id", getArticle);

// Update article by id
router.patch(
  "/update/:id",
  authGuard,
  uploads.single("picture"),
  updateArticleValidation,
  updateArticle
);

// Delete article by id
router.delete("/:id", authGuard, deleteArticle);

export default router;
