const { Router } = require('express');

const signupUsuarioController = require('./controllers/signup-usuario-controller');
const signinUsuarioController = require('./controllers/signin-usuario-controller');
const createTarefaController = require('./controllers/create-tarefa-controller');

const { authMiddleware } = require('./middlewares/auth-middleware');

const routes = Router();

routes.post('/api/users', signupUsuarioController.signup);
routes.post('/api/authenticate', signinUsuarioController.signin);

routes.post('/api/todos', authMiddleware, createTarefaController.create);
//routes.get('/api/todos', authMiddleware, createTarefaController.create);
//routes.put('/api/todos', authMiddleware, createTarefaController.create);

module.exports = { routes };
