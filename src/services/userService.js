const { UserModel, TaskModel } = require('../models');
const { jwt: { createToken }, ValidateError, ErrorMessages } = require('../utils');

const userAlreadyRegistered = async (email) => {
  const user = await UserModel.getByEmail(email);
  return user;
};

const create = async (userData) => {
  const user = await userAlreadyRegistered(userData.email);

  if (user) {
    throw ValidateError(409, ErrorMessages.USER_ALREADY_REGISTERED);
  }

  await UserModel.create(userData);
  const { password, ...payload } = userData;
  return createToken(payload);
};

const getAll = async () => {
  const users = await UserModel.getAll();
  return users.map(({ password, ...data }) => data);
};

const getById = async (id) => {
  const user = await UserModel.getById(id);

  if (!user) {
    throw ValidateError(404, ErrorMessages.USER_NOT_EXISTS);
  }

  const { password: _, ...data } = user;
  return data;
};

const deleteMe = async (id) => {
  await UserModel.deleteById(id);
  await TaskModel.deleteByUserId(id);
};

module.exports = {
  create,
  getAll,
  getById,
  deleteMe,
};