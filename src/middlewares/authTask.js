const { TaskSchema } = require('../schemas');
const { ValidateError } = require('../utils');

module.exports = (req, _res, next) => {
  const { task, status } = req.body;
  const { error } = TaskSchema.validate({ task, status });

  if (error) {
    throw ValidateError(400, error.details[0].message);
  }

  next();
};
