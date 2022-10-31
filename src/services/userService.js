const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const insertLogin = async (email) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
    const { id } = user.dataValues;
    return { status: 200, message: { token: generateToken(Number(id)) } };
    }
};

const insertUser = async ({ displayName, email, password }) => {
    const validateUser = await User.findOne({ where: { email } });
    if (validateUser !== null) {
        return { status: 409, message: { message: 'User already registered' } };
    }
    const user = await User.create({ displayName, email, password });
    const { id } = user.dataValues;
    return { status: 201, message: { token: generateToken(Number(id)) } };
};

const getAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    // console.log(users);
    return users;
};

const getUserById = async (id) => {
    const userById = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
      });
    
      return userById;
};

module.exports = {
    insertLogin,
    insertUser,
    getAllUsers,
    getUserById,
};