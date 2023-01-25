import Message from "./../models/userMessages-model";

async function createMessage(req, res, next) {
  try {
    const createdMessage = await Message.create(req.body);
    res.status(201).json({
      status: 201,
      message: "message created successfully",
      data: createdMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}
async function getAllMessages(req, res, next) {
  try {
    const messages = await Message.find();
    res.status(200).json({
      status: 200,
      message: "All messages retrieved successfully",
      data: messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}
async function getMessages(req, res, next) {
  try {
    const messages = await Message.findById({ _id: req.params.id });
    res.status(200).json({
      status: 200,
      message: "one message retrieved successfully",
      data: messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "internal server error" });
  }
}

async function deleteMessage(req, res, next) {
  try {
    const message = await Message.findByIdAndDelete({ _Id: req.params.id });
    res.status(200).json({
      status: 200,
      message: "message is deleted successfully",
      data: messages,
    });
  } catch (error) {
    console.log(error);
    res.result(500).json({ status: 500, message: "internal server error" });
  }
}

export { createMessage, getAllMessages, getMessages, deleteMessage };
