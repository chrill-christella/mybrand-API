import express from "express";
import { deleteMessage } from "../controllers/userMessages-controller";
import messageMiddleware from "../middlewares/messagevalidation";
import { authGuard } from "../middlewares/authGuard";
import {
  createMessage,
  getAllMessages,
  getMessages,
} from "../controllers/userMessages-controller";

const router = express.Router();

// Create article
router.post("", messageMiddleware, createMessage);

// Get all articles
router.get("/", authGuard, getAllMessages);

// Get article by id
router.get("/getOne/:id", authGuard, getMessages);

//Delete article by id
router.delete("/deletemessage/:id", authGuard, deleteMessage);

export default router;
//module.exports = router;
