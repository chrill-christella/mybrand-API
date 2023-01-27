const Joi = require("joi");

const messageValidation = Joi.object({
  name: Joi.string().min(5).required(),
  email: Joi.string().min(10).required(),
  message: Joi.string().min(20).required(),
});

module.exports = messageValidation;
