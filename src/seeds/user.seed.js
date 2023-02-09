import mongoose from "mongoose";
import { hashContent } from "../utils/bcrypt.util";
import User from "../models/user-model";
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.set("debug", true);
    await mongoose.connect(
      process.env.NODE_ENV === "test"
        ? process.env.DATABASEURL_TEST
        : process.env.DATABASEURL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const users = [
      {
        username: "Admin",
        email: "ad@gmail.com",
        password: await hashContent("Passcode@1"),
      },
    ];
    for (const user of users) {
      const adminExist = await User.findOne({ email: user.email });
      if (!adminExist) {
        await User.create(user);
      }
    }
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    console.log("Having problems connection to the DATABASE");
  }
};

connectDB();
