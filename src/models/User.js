module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTERGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    }
    ,
    {
      timestamp: false,
      underscored: true,
      tableName: 'users',
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        as: 'blog_post',
        foreignKey: 'user_id',
      });
    };

    return User;
};