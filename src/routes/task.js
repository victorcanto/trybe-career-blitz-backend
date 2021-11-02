const { Router } = require('express');
const { AuthTask, AuthToken } = require('../middlewares');
const { TaskController } = require('../controllers');

const router = Router();

router.post('/', AuthToken, AuthTask, TaskController.createTask);
router.get('/', AuthToken, TaskController.getAllTasks);
router.get('/search', AuthToken, TaskController.getTaskBySearchTerm);
router.get('/me', AuthToken, TaskController.getTasksByUserId);
router.get('/:id', AuthToken, TaskController.getTaskById);
router.put('/:id', AuthToken, AuthTask, TaskController.updateTaskById);
router.delete('/me', AuthToken, TaskController.deleteTasksByUserId);
router.delete('/:id', AuthToken, TaskController.deleteTaskById);

module.exports = router;