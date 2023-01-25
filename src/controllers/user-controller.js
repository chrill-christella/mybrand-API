const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(409).send({ message: "User with this email exist" });
      } else {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            // Store hash in your password DB.
            const userData = {
              username: req.body.username,
              email: req.body.email,
              password: hash,
            };
            User.create(userData).then((user) => {
              res
                .status(200)
                .send({ message: "User created", userID: user._id });
            });
          });
        });
      }
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
};

const login = async (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
            },
            process.env.KEY,
            { expiresIn: "1h" }
          );

          return res.status(200).json({
            message: "logged in successfully",
            token: token,
          });
          res.header("auth_token", token);
        } else {
          return res
            .status(401)
            .send({ message: "Email and password are incorrect" });
        }
      });
    })
    .catch((error) => {
      res.status(401).send({ error: error.message });
    });
};

module.exports = {
  signup,
  login,
};
