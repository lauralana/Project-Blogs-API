// module.exports = (sequelize, DataTypes) => {
//   const Category = sequelize.define('Category', {
//     id: {
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER
//     },
//     name: DataTypes.STRING,
// }
//   ,
// {
//     timestamp: false,
//     underscored: true,
//     tableName: 'categories',
//   });

//   Category.associate = (models) => {
//     Category.hasMany(models.PostCategory, {
//       as: 'posts_categories',
//       foreignKey: 'post_id',
//     });
//   };
//   return Category;
// };
module.exports = (sequelize, DataTypes) => {
  
  const Category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    
  },
  {
    timestamps: false,
    tableName: 'categories',
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, { foreignKey: 'category_id', as: 'posts_categories' });
  }

    return Category;
}