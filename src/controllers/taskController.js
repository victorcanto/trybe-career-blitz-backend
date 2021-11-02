const { TaskService } = require('../services');

const createTask = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const { task, status } = req.body;
    const createdTask = await TaskService.create({ task, status, userId });
    return res.status(201).json(createdTask);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getAllTasks = async (_req, res, next) => {
  try {
    const tasks = await TaskService.getAll();
    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await TaskService.getById(id);
    return res.status(200).json(task);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTasksByUserId = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const tasks = await TaskService.getByUserId(userId);
    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTaskBySearchTerm = async (req, res, next) => {
  try {
    const { query } = req;
    const tasks = await TaskService.getBySearchTerm(query);
    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateTaskById = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const { _id: userId } = req.user;
    const { task, status } = req.body;
    const updatedTask = await TaskService.updateById(
      taskId,
      userId,
      { task, status },
    );
    return res.status(200).json(updatedTask);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteTaskById = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const { _id: userId } = req.user;
    const { status } = await TaskService.deleteById(taskId, userId);
    return res.status(status).json();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteTasksByUserId = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const { status } = await TaskService.deleteByUserId(userId);
    return res.status(status).json();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  getTasksByUserId,
  getTaskBySearchTerm,
  updateTaskById,
  deleteTaskById,
  deleteTasksByUserId,
};