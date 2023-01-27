import { decode } from "../utils/jwt.util";
import User from "../models/user-model";
require("dotenv").config();

export const authGuard = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const data = await decode(token);
    await User.findById({ _id: data.id });
    next();
  } catch (error) {
    next(error);
  }
};
