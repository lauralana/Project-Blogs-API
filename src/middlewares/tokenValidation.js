const { verifyToken } = require('../utils/generateToken');

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
console.log(token);
    if (!token) {
        return res.status(401).json({
            message: 'Token not found',
          });
    }
    if (verifyToken(token) === false) {
        return res.status(401).json({
            message: 'Expired or invalid token',
          });
    }
    next();
};

module.exports = {
    validateToken,
};