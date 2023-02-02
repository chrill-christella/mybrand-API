import express from "express";
import { getComments, postComment } from "../controllers/comments-controller";
import commentMiddleware from "../middlewares/commentvalidation";
const router = express.Router();
router.get("/", getComments);
router.post("/", commentMiddleware, postComment);

export default router;
