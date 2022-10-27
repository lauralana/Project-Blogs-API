module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTERGER
    },
    name: DataTypes.STRING,
}
  ,
{
    timestamp: false,
    underscored: true,
    tableName: 'categories',
  });
  
  return Category;
};