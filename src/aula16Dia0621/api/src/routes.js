const { Router } = require('express');

const signupUserController = require('./controllers/signup-user-controller');
const signinUserController = require('./controllers/signin-user-controller');
const createNutritionistController = require('./controllers/create-nutritionist-controller');

const { authMiddleware } = require('./middlewares/auth-middleware');

const routes = Router();

routes.post('/user/signup', signupUserController.signup);
routes.post('/user/signin', signinUserController.signin);

routes.post('/nutritionist', authMiddleware, createNutritionistController.create);

module.exports = { routes };
