const express = require('express');

// rotas de validação
const { validateLogin } = require('../middlewares/loginValidation');

// rotas do controller
const postController = require('../controllers/userController');

const route = express.Router();

route.post('/login', validateLogin, postController.insertLoginOnController);

module.exports = route;