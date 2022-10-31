const snakeize = require('snakeize');
const { BlogPost, PostCategory } = require('../models');
const { verifyToken } = require('../utils/generateToken');

const insertPost = async ({ title, content, categoryIds }, token) => {
    const date = new Date().toISOString().slice(0, 10).replace('T', ' ');
    const blog = await BlogPost.create({
      userId: verifyToken(token).data.id,
      title,
      content,
      updated: date,
      published: date,
    });
    categoryIds.forEach(async (id) => {
      const ids = await PostCategory.create(snakeize({
        postId: blog.dataValues.id,
        categoryId: id,
  }));
  console.log(ids);
   });
  
    return { status: 201, message: blog.dataValues };
};

module.exports = {
    insertPost,
};
