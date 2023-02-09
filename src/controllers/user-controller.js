import { login } from "./../services/user.service";
require("dotenv").config();
import { StatusCodes } from "http-status-codes";

const signin = async (req, res, next) => {
  try {
    const results = await login(req, res, next, req.body);
    res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Success", payload: results });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signin,
};
