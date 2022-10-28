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
 console.log(validateUser);
    if (validateUser !== null) {
        return { status: 409, message: { message: 'User already registered' } };
    }
    const user = await User.create({ displayName, email, password });
    const { id } = user.dataValues;
    return { status: 201, message: { token: generateToken(Number(id)) } };
};

module.exports = {
    insertLogin,
    insertUser,
};