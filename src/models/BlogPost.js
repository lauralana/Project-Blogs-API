// module.exports = (sequelize, DataTypes) => {
//   const BlogPost = sequelize.define('BlogPost', {
//     id: {
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER
//     },
//    title: DataTypes.STRING,
//    content: DataTypes.STRING,
//    published: DataTypes.DATE,
//    updated: DataTypes.DATE,
//    userId: DataTypes.INTEGER,
//   }
//   ,
//   {
//     timestamp: false,
//     underscored: true,
//     tableName: 'blog_posts',
//   });

//   BlogPost.associate = (models) => {
//     BlogPost.belongsTo(models.User, {
//       as: 'user',
//       foreignKey: 'user_id', 
//     });
//     BlogPost.hasMany(models.PostCategory, {
//       as: 'posts_categories',
//       foreignKey: 'postId',
//     });
//   };

//   return BlogPost;
// };
module.exports = (sequelize, DataTypes) => {
  
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content:
     DataTypes.STRING,
    userId: {
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'id', as: 'users' });
    BlogPost.hasMany(models.PostCategory, { foreignKey: 'post_id', as: 'posts_categories' });
  }
  
    return BlogPost;
}