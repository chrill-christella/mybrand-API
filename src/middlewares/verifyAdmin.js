const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.KEY);
    next();
  } catch (error) {
    res.status(401).json({
      // message: 'Authentication failed please login'
      error: error,
    });
  }
};

module.exports = auth;
