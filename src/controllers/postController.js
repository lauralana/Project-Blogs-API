const { insertPost } = require('../services/postService');

const insertPostOnController = async (req, res) => {
    const infoOfBlog = req.body;
    const token = req.headers.authorization;
    const create = await insertPost(infoOfBlog, token);

    const result = res.status(create.status).json(create.message);
    return result;
};

module.exports = {
    insertPostOnController,
};