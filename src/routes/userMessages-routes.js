import express from "express";
import { deleteMessage } from "../controllers/userMessages-controller";
import messageMiddleware from "../middlewares/messagevalidation";
import {
  createMessage,
  getAllMessages,
  getMessages,
} from "../controllers/userMessages-controller";

import { authGuard } from "../middlewares/authGuard";

const router = express.Router();

// Create message
router.post("", messageMiddleware, createMessage);

// Get all messages
router.get("/", authGuard, getAllMessages);

// Get article by id
router.get("/getOne/:id", authGuard, getMessages);

//Delete article by id
router.delete("/deletemessage/:id", deleteMessage);

export default router;
