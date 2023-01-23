const Joi = require("joi");

const blogValidation = Joi.object({
  title: Joi.string().min(5).required(),
  description: Joi.string().min(20).required(),
  picture: Joi.string().required(),
  likes: Joi.array(),
  comments: Joi.array(),
});

module.exports = blogValidation;
