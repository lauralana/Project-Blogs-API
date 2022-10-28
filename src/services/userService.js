const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const insertLogin = async (email) => {
const user = await User.findOne({ where: { email } });

if (user) {
    const { id } = user.dataValues;
    return { status: 200, message: { token: generateToken(Number(id)) } };
}
};

module.exports = {
    insertLogin,
};