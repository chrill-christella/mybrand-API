const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required."],
  },
  email: {
    type: String,
    required: [true, "email field is required."],
  },
  message: {
    type: String,
    required: [true, "The message field is required."],
  },
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;
