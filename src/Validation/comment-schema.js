const Joi = require("joi");

const commentValidation = Joi.object({
  comment: Joi.string().min(5).required(),
});

module.exports = commentValidation;
