const { UserModel } = require('../models');
const { jwt: { createToken }, ValidateError, ErrorMessages } = require('../utils');

const checkLoginData = async (email, password) => {
  const user = await UserModel.getByEmail(email);
  return user && user.password === password ? user : null;
};

const login = async (email, password) => {
  const user = await checkLoginData(email, password);

  if (!user) {
    throw ValidateError(400, ErrorMessages.INVALID_FIELDS);
  }

  const { password: _, ...payload } = user;

  return createToken(payload);
};

module.exports = { login };