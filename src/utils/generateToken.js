require('dotenv/config');
const JWT = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (id) => {
  const token = JWT.sign({ data: { id } }, jwtSecret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  try {
  const tokenVerify = JWT.verify(token, jwtSecret);
    return tokenVerify;
  } catch (error) {
    return false;
}
};

module.exports = {
  generateToken,
  verifyToken,
};