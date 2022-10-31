const { Category } = require('../models');

const validatePost = async (req, res, next) => {
   const { title, content, categoryIds } = req.body;

   if (title === '' || content === '') {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  const allCategories = await Category.findAll();
  const exists = allCategories.reduce((acc, cur) => {
    if (categoryIds.includes(cur.dataValues.id)) return [...acc, true];

        return [...acc, false];
  }, []);
  if (exists.includes(false)) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  
  next();
};

module.exports = {
    validatePost,
};