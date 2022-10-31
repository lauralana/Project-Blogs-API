const { insertLogin, insertUser, getAllUsers, getUserById } = require('../services/userService');

const insertLoginOnController = async (req, res) => {
    const { email } = req.body;
    const user = await insertLogin(email);
    const result = res.status(user.status).json(user.message);
    
    return result;
};

const insertUserOnController = async (req, res) => {
    const infoOfUser = req.body;

    const createUser = await insertUser(infoOfUser);
    const result = res.status(createUser.status).json(createUser.message);

    return result;
};

const getAllUsersOnController = async (_req, res) => {
    const users = await getAllUsers();
    const result = res.status(200).json(users);

    return result;
};

const getUserByIdOnController = async (req, res) => {
    const { id } = req.params;
    const userById = await getUserById(Number(id));

    if (userById) {
    return res.status(200).json(userById);
    }
    return res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
    insertLoginOnController,
    insertUserOnController,
    getAllUsersOnController,
    getUserByIdOnController,
};