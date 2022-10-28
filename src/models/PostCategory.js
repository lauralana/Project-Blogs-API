module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTERGER,
    },
    categoryId: { 
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
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',  
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};

