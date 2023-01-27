const blogValidation = require("../Validation/blog-schema");

async function blogMiddleware(req, res, next) {
  const { error, value } = blogValidation.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validateData = value;
  next();
}

module.exports = blogMiddleware;
