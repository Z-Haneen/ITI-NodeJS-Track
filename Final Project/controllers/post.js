const AppError = require("../utils/AppError");
const Post = require("../model/post");

const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const user = req.user;

    if (!title || !content) {
      return next(new AppError("Title and content are required", 400));
    }

    const imageUrl = req.images ? req.images[0] : null;

    const post = await Post.create({
      title,
      content,
      image: imageUrl,
      author: user._id
    });

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("author", "name email image");
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPost, getAllPosts };