import mongoose from "mongoose";
import { hashContent } from "./src/utils/bcrypt.util";
import User from "./src/models/user-model";
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.set("debug", true);
    await mongoose.connect(
      process.env.NODE_ENV === "test"
        ? process.env.DATABASEURL
        : process.env.DATABASEURL_TEST,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const users = [
      {
        username: "Christella",
        email: "chris@gmail.com",
        password: await hashContent("Passcode@1"),
      },
    ];
    for (const user of users) {
      const adminExist = await User.findOne({ email: user.email });
      if (!adminExist) {
        await User.create(user);
      }
      console.log(adminExist);
    }
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    console.log("Having problems connecting to the DATABASE");
  }
};

connectDB();
