const { UserService } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const token = await UserService.create({
      name,
      email,
      password,
    });
    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteMe = async (req, res, next) => {
  try {
    const { _id } = req.user;
    await UserService.deleteMe(_id);
    return res.status(204).json();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
};