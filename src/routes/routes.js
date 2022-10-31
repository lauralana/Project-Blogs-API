const express = require('express');

// rotas de validação
const { validateLogin } = require('../middlewares/loginValidation');
const { validateUser } = require('../middlewares/userValidation');
const { validateToken } = require('../middlewares/tokenValidation');

// rotas do controller
const postController = require('../controllers/userController');
const postUserController = require('../controllers/userController');
const getController = require('../controllers/userController');
const getUserIdController = require('../controllers/userController');

const route = express.Router();

route.post('/login', validateLogin, postController.insertLoginOnController);
route.post('/user', validateUser, postUserController.insertUserOnController);

route.get('/user', validateToken, getController.getAllUsersOnController);
route.get('/user/:id', validateToken, getUserIdController.getUserByIdOnController);
module.exports = route;