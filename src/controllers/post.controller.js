const PostModel = require("../models/post.model");
const NotFoundException = require("../exceptions/notFound.exception");

const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const post = await PostModel.create({
      title,
      content,
      user: req.user.id,
    });

    res.status(201).json({ success: true, data: post });
  } catch (event) {
    next(event);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const { page, limit, q } = req.query;

    const searchQuery = q ? { $text: { $search: q } } : {};

    const posts = await PostModel.find(searchQuery)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    res.json({ success: true, data: posts });
  } catch (event) {
    next(event);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id)
      .populate("user", "username")
      .exec();

    if (!post) {
      throw new NotFoundException(`Not found post ${req.params.id}`);
    }
    res.json({ success: true, data: post });
  } catch (event) {
    next(event);
  }
};

const updatePostById = async (req, res, next) => {
  try {
    const post = await PostModel.findByIdOrFail(req.params.id);
    post.set(req.body);
    await post.save();
    res.json({
      success: true,
      data: post,
    });
  } catch (event) {
    next(event);
  }
};

const deletePostById = async (req, res, next) => {
  try {
    const post = await PostModel.findByIdOrFail(req.params.id);
    await post.deleteOne();
    res.sendStatus(204);
  } catch (event) {
    next(event);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
