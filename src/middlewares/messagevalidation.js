const messagevalidation = require("./../Validation/userMessages-schema");

async function messageMiddleware(req, res, next) {
  const { error, value } = messagevalidation.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  req.validateData = value;
  next();
}

module.exports = messageMiddleware;
