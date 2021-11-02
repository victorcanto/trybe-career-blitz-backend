const { TaskModel } = require('../models');
const { ErrorMessages, ValidateError } = require('../utils');

const checkTaskCreator = async (taskId, userId) => {
  const task = await TaskModel.getById(taskId);
  if (!task) {
    throw ValidateError(404, ErrorMessages.TASK_NOT_EXISTS);
  }

  const isTaskCreator = String(task.userId) === String(userId);
  if (!isTaskCreator) {
    throw ValidateError(401, ErrorMessages.UNAUTHORIZED_USER);
  }
};

const create = async ({ task, status, userId }) => {
  const { insertedId } = await TaskModel.create({ task, status, userId });
  const createdTask = await TaskModel.getById(insertedId);
  return createdTask;
};

const getAll = async () => {
  const tasks = await TaskModel.getAll();
  return tasks;
};

const getById = async (id) => {
  const task = await TaskModel.getById(id);

  if (!task) {
    throw ValidateError(404, ErrorMessages.TASK_NOT_EXISTS);
  }
  return task;
};

const getByUserId = async (userId) => {
  const tasks = await TaskModel.getByUserId(userId);

  if (!tasks) {
    throw ValidateError(404, ErrorMessages.TASKS_NOT_EXISTS);
  }

  return tasks;
};

const getBySearchTerm = async (query) => {
  const tasks = await TaskModel.getBySearchTerm(query);

  if (!tasks.length) {
    throw ValidateError(404, ErrorMessages.TASKS_NOT_FOUND);
  }

  return tasks;
};

const updateById = async (taskId, userId, data) => {
  await checkTaskCreator(taskId, userId);
  const updatedTask = await TaskModel.updateById(taskId, data);
  if (updatedTask) {
    return TaskModel.getById(taskId);
  }
  return data;
};

const deleteById = async (taskId, userId) => {
  await checkTaskCreator(taskId, userId);
  const deletedTask = await TaskModel.deleteById(taskId);

  if (deletedTask) {
    return { status: 204 };
  }
};

const deleteByUserId = async (userId) => {
  const deletedTask = await TaskModel.deleteByUserId(userId);

  if (deletedTask) {
    return { status: 204 };
  }
};

module.exports = {
  create,
  getAll,
  getById,
  getByUserId,
  getBySearchTerm,
  updateById,
  deleteByUserId,
  deleteById,
};
