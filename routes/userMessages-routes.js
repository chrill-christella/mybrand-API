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

// Get article by id
router.get("/getOne/:id", getMessages);

//Delete article by id
router.delete("/deletemessage/:id", deleteMessage);


export default router;

