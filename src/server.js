
// este archivo aloja la definicion de nuestro servidor
const express = require('express');

const kodersRouter = require('./routers/koders');
const mentorsRouter = require('./routers/mentors');
const usersRouter = require('./routers/users')
const logger = require('./middlewares/logger')

const app = express();

app.use(express.json())

app.use(logger)

app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouter);
app.use('/users', usersRouter)

module.exports = app;
