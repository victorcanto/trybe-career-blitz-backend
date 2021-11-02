const { UserModel } = require('../models');
const { jwt: { checkToken }, ValidateError, ErrorMessages } = require('../utils');

module.exports = async (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return next(ValidateError(401, ErrorMessages.TOKEN_NOT_FOUND));
  }

  try {
    const { payload: { email } } = checkToken(token);
    const { password: _, ...data } = await UserModel.getByEmail(email);
    req.user = data;
    next();
  } catch (err) {
    next(ValidateError(401, ErrorMessages.INVALID_TOKEN));
  }
};