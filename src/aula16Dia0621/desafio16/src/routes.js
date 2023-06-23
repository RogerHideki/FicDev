const { Router } = require('express');

const signupUsuarioController = require('./controllers/signup-usuario-controller');
const signinUsuarioController = require('./controllers/signin-usuario-controller');

const findAllTarefaController = require('./controllers/findAll-tarefa-controller');
const findTarefaController = require('./controllers/find-tarefa-controller');
const createTarefaController = require('./controllers/create-tarefa-controller');
const updateTarefaController = require('./controllers/update-tarefa-controller');
const destroyTarefaController = require('./controllers/destroy-tarefa-controller');

const { authMiddleware } = require('./middlewares/auth-middleware');

const routes = Router();

routes.post('/api/users', signupUsuarioController.signup);
routes.post('/api/authenticate', signinUsuarioController.signin);

routes.get('/api/todos/', authMiddleware, findAllTarefaController.findAll);
routes.get('/api/todos/:id', authMiddleware, findTarefaController.find);
routes.post('/api/todos', authMiddleware, createTarefaController.create);
routes.put('/api/todos/:id', authMiddleware, updateTarefaController.update);
routes.delete('/api/todos/:id', authMiddleware, destroyTarefaController.destroy);


module.exports = { routes };
