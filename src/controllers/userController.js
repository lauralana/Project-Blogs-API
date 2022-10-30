const { insertLogin, insertUser, getAllUsers } = require('../services/userService');

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
    console.log(users);
    const result = res.status(200).json(users);

    return result;
};

module.exports = {
    insertLoginOnController,
    insertUserOnController,
    getAllUsersOnController,
};