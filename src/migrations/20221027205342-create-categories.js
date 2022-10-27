const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
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
    await queryInterface.dropTable('categories');
  }
};