const express = require('express');

// rotas de validação
const { validateLogin } = require('../middlewares/loginValidation');
const { validateUser } = require('../middlewares/userValidation');
const { validateToken } = require('../middlewares/tokenValidation');
const { validateCategory } = require('../middlewares/categoryValidation');
const { validatePost } = require('../middlewares/postValidation');

// rotas do controller
const postController = require('../controllers/userController');
const postUserController = require('../controllers/userController');
const getController = require('../controllers/userController');
const getUserIdController = require('../controllers/userController');
const postCategory = require('../controllers/categoryController');
const getCategory = require('../controllers/categoryController');
const postRoutePostController = require('../controllers/postController');

const route = express.Router();

route.post('/login', validateLogin, postController.insertLoginOnController);
route.post('/user', validateUser, postUserController.insertUserOnController);
route.post('/categories', validateToken, validateCategory, postCategory.insertCategoryOnController);
route.post('/post', validateToken, validatePost, postRoutePostController.insertPostOnController);

route.get('/user', validateToken, getController.getAllUsersOnController);
route.get('/user/:id', validateToken,
getUserIdController.getUserByIdOnController);
route.get('/categories', validateToken, getCategory.getAllCategoriesOnController);

module.exports = route;