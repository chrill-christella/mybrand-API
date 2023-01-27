import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userScheme = new Schema({
  username: {
    type: String,
    required: [true, "User must have the username"],
  },
  email: {
    type: String,
    required: [true, "User must have the email"],
  },
  password: {
    type: String,
    required: [true, "The user must have the assigned password"],
  },
});

const User = mongoose.model("user", userScheme);

export default User;
