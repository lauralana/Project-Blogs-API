module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    post_id: {
      primaryKey: true,
      type: DataTypes.INTERGER,
    },
    category_id: { 
      primaryKey: true,
      type: DataTypes.STRING,
    },
  }
  ,
  {
    timestamp: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_post',
      through: PostCategory,
      foreignKey: 'category_id',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'post_id',
    });
    models.Category.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',  
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};

