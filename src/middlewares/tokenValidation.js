const { verifyToken } = require('../utils/generateToken');

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
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

 // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozfSwiaWF0IjoxNjY3MTc0ODI4LCJleHAiOjE2Njc3Nzk2Mjh9.pXgxwyaXhXAsvaxLChIa511urRF5yDgE05tZ8p6y6QA