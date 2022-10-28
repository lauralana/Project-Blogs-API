const { insertLogin } = require('../services/userService');

const insertLoginOnController = async (req, res) => {
    const { email } = req.body;
    const user = await insertLogin(email);
    const result = res.status(user.status).json(user.message);
    
    return result;
};

module.exports = {
    insertLoginOnController,
};