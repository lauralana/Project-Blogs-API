const express = require('express');

// rotas de validação
const { validateLogin } = require('../middlewares/loginValidation');
const { validateUser } = require('../middlewares/userValidation');
// rotas do controller
const postController = require('../controllers/userController');
const postUserController = require('../controllers/userController');

const route = express.Router();

route.post('/login', validateLogin, postController.insertLoginOnController);
route.post('/user', validateUser, postUserController.insertUserOnController);
module.exports = route;