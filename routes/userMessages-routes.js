import express from "express";
import { deleteMessage } from "./../src/controllers/userMessages-controller";
import messageMiddleware from "../src/middlewares/messagevalidation";
import {
  createMessage,
  getAllMessages,
  getMessages,

} from "./../src/controllers/userMessages-controller";

const router = express.Router();

// Create message
router.post("", messageMiddleware, createMessage);

// Get all messages
router.get("/", getAllMessages);

// Get message by id
router.get("/:id", getMessages);

//Delete message by id
router.delete("/:id", deleteMessage);

export default router;

