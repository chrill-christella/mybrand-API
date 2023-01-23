const express = require("express");
const {
  deleteMessage,
} = require("./../src/controllers/userMessages-controller");
const messageMiddleware = require("../src/middlewares/messagevalidation");
const {
  createMessage,
  getAllMessages,
  getMessages,
} = require("./../src/controllers/userMessages-controller");

const router = express.Router();

// Create article
router.post("", messageMiddleware, createMessage);

// Get all articles
router.get("/", getAllMessages);

// Get article by id
router.get("/:id", getMessages);

//Delete article by id
router.delete("/:id", deleteMessage);

//export default router;
module.exports = router;
