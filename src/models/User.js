// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     id: {
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     displayName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     image: DataTypes.STRING,
//     }
//     ,
//     {
//       timestamp: false,
//       underscored: true,
//       tableName: 'users',
//     });

//     User.associate = (models) => {
//       User.hasMany(models.BlogPost, {
//         foreignKey: 'user_id',
//         as: 'blog_post',
//       });
//     };

//     return User;
// };

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    
  },
  {
    timestamps: false,
    tableName: 'users',
  });
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'blog_post' })
    }

    return User;
}