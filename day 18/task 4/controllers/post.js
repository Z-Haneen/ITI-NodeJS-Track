const AppError = require("../utils/AppError");
const User = require("../model/user");
const Post = require("../model/post");

const createPost = async (req, res, next) => {
  const body = req.body;
  const user = await User.findById(body.author);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const post = await Post.create({ title, content, author: user._id });
  res.status(201).json({ message: "Post created successfully", post });
};

// when get post return user data (name , email and image)
