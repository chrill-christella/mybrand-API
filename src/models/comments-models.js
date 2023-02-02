const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: [true, "there must be the comment content"],
  },
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
