module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    },
    {
      timestamp: false,
      underscored: true,
      tableName: 'users',
    }
    );
   
    return Users;
}