// const userModel = require('../models/User');

// const validateUser = async (req, res, next) => {
//   const { email, password } = req.body;
//   const userEmail = await userModel.findOne({ where: { email } });

//   if (!email || !password) {
//     return res.status(400).json({
//       message: 'Some required fields are missing',
//     });
//   }
//   if (!userEmail || userEmail.password !== password) {
//     return res.status(400).json({
//       message: 'Invalid fields',
//     });
//   }
//   next();
// };

// module.exports = {
//   validateUser,
// };