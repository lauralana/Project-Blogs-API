const { DataTypes } = require('sequelize');

'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      display_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      image: {
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
    await queryInterface.dropTable('users');
  }
};