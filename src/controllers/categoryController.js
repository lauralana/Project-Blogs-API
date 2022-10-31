const { insertCategory, getAllCategories } = require('../services/categoryService');

const insertCategoryOnController = async (req, res) => {
    const category = req.body;
    const insert = await insertCategory(category);
    const result = res.status(201).json(insert);

    return result;
};

const getAllCategoriesOnController = async (_req, res) => {
    const Categories = await getAllCategories();
    const result = res.status(200).json(Categories);

    return result;
};

module.exports = {
    insertCategoryOnController,
    getAllCategoriesOnController,
};