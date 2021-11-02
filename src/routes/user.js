const { Router } = require('express');
const { AuthUser, AuthToken } = require('../middlewares');
const { UserController } = require('../controllers');

const router = Router();

router.post('/', AuthUser, UserController.createUser);
router.get('/', AuthToken, UserController.getAllUsers);
router.get('/:id', AuthToken, UserController.getUserById);
router.delete('/me', AuthToken, UserController.deleteMe);

module.exports = router;