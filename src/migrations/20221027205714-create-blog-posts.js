const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published: {
        type: DataTypes.DATE
      },
      updated: {
        type: DataTypes.DATE
      },
      // created_at: {
      //   allowNull: false,
      //   type: DataTypes.DATE
      // },
      // updated_at: {
      //   allowNull: false,
      //   type: DataTypes.DATE
      // }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('blog_posts');
  }
};