import express from "express";
import {
  getComments,
  postComment,
} from "../src/controllers/comments-controller";
import commentMiddleware from "../src/middlewares/commentvalidation";
const router = express.Router();
router.get("/", getComments);
router.post("", commentMiddleware, postComment);

export default router;
