import express from "express";
import { deleteMessage } from "./../src/controllers/userMessages-controller";
import messageMiddleware from "../src/middlewares/messagevalidation";
import {
  createMessage,
  getAllMessages,
  getMessages,
} from "./../src/controllers/userMessages-controller";

const router = express.Router();

// Create article
router.post("", messageMiddleware, createMessage);

// Get all articles
router.get("/", getAllMessages);

// Get article by id
router.get("/:id", getMessages);

//Delete article by id
router.delete("/:id", deleteMessage);

export default router;

