// const userModel = require('../models/User');
// const token = require('../middlewares/generateToken');

// const insertLogin = async(email) =>{
//     const userEmail = await userModel.findOne({ where: { email }});
// };

// if (userEmail) {
//     const { id } = userEmail;
//     return { status: 200, message: { generateToken: token(Number(id)) } };
// }

// module.exports = {
//     insertLogin,
// };