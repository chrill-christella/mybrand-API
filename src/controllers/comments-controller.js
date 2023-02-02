import Comment from "./../../src/models/comments-models";

//const Comment = require("../models/comments-models");

async function getComments(req, res, next) {
  try {
    const comments = await Comment.find({ commentID: req.params.id });
    res.status(200).send(comments);
    data: comments;
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}

const postComment = async (req, res) => {
  try {
    req.body.commentID = req.params.id;
    const comment = await Comment.create(req.body);
    res.status(201).json({ message: "comment added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getComments, postComment };
