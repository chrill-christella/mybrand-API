const commentValidation = require("./../Validation/comment-schema");

async function commentMiddleware(req, res, next) {
  const { error, value } = commentValidation.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validateData = value;
  next();
}

module.exports = commentMiddleware;