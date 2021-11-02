const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { userRouter, taskRouter, loginRouter } = require('../routes');
const { ErrorMiddleware } = require('../middlewares');

app.use('/user', userRouter);
app.use('/task', taskRouter);
app.use('/login', loginRouter);

app.use(ErrorMiddleware);

module.exports = { app };
