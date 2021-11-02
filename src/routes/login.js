const { Router } = require('express');
const { AuthLogin } = require('../middlewares');
const { LoginController } = require('../controllers');

const router = Router();

router.post('/', AuthLogin, LoginController);

module.exports = router;