const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        }
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('posts_categories');
  }
};