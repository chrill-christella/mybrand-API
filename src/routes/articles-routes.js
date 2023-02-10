import express from "express";
import {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article-controller";
import blogMiddleware from "../middlewares/blogvalidation";
import { authGuard } from "../middlewares/authGuard";
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
  blogMiddleware,
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
  blogMiddleware,
  updateArticle
);

// Delete article by id
router.delete("/:id", authGuard, deleteArticle);

export default router;
