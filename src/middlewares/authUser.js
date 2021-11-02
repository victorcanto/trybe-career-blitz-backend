const { UserSchema } = require('../schemas');
const { ValidateError } = require('../utils');

module.exports = (req, _res, next) => {
  const { name, email, password } = req.body;
  const { error } = UserSchema.validate({ name, email, password });

  if (error) {
   throw ValidateError(400, error.details[0].message);
  }

  next();
};