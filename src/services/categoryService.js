const { Category } = require('../models');

const insertCategory = async (category) => {
    const create = await Category.create(category);

    return create;
};
const getAllCategories = async () => {
    const categories = await Category.findAll();

    return categories;
};

module.exports = {
    insertCategory,
    getAllCategories,
};