const { User } = require('../models');

const validateLogin = async (req, res, next) => {
const { email, password } = req.body;
const user = await User.findOne({ where: { email } });

if (!email || !password) {
    return res.status(400).json({
        message: 'Some required fields are missing',
      });
}
if (!user || user.password !== password) {
    return res.status(400).json({
        message: 'Invalid fields',
      });
}
next();
};

module.exports = {
  validateLogin,
};