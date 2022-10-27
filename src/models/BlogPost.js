module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTERGER
    },
   title: DataTypes.STRING,
   content: DataTypes.STRING,
   published: DataTypes.DATE,
   updated: DataTypes.DATE,
   userId: DataTypes.INTERGER,
  }
  ,
  {
    timestamp: false,
    underscored: true,
    tableName: 'blog_posts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsToMany(models.User, {
      as: 'user',
      foreignKey: 'user_id', 

    });

  };

  return PostCategory;
};