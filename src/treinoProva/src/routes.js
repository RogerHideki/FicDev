const { Router } = require('express');

const signupUserController = require('./controllers/signup-user-controller');
const signinUserController = require('./controllers/signin-user-controller');
const createTarefaController = require('./controllers/create-tarefa-controller');

const { authMiddleware } = require('./middlewares/auth-middleware');

const routes = Router();

routes.post('/api/users', signupUserController.signup);
routes.post('/api/authenticate', signinUserController.signin);

routes.post('/api/tarefas', authMiddleware, createTarefaController.create);
//routes.get('/api/tarefas', authMiddleware, createTarefaController.create);
//routes.put('/api/tarefas', authMiddleware, createTarefaController.create);
//routes.delete('/api/tarefas', authMiddleware, createTarefaController.create);

module.exports = { routes };
