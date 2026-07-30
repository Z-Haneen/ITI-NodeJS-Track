const AppError = require("../utils/AppError");
const { readFile, writeFile } = require("../utils/file-operation");

const postFile = "model/posts.json";
const userFile = "model/users.json";

const createPost = async (req, res, next) => {
    const { title, content, userId } = req.body;
    if (!title || !content || !userId) {
        throw new AppError("Please provide title, content and userId", 400);
    }

    const users = await readFile(userFile);
    const userExists = users.some((user) => user.id.toString() === userId.toString());
    if (!userExists) {
        throw new AppError("User not found for this post", 404);
    }

    const posts = await readFile(postFile);
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        userId
    };

    posts.push(newPost);
    await writeFile(postFile, posts);
    res.status(201).json({ message: "Post created successfully", post: newPost });
};

const getAllPosts = async (req, res, next) => {
    const posts = await readFile(postFile);
    res.status(200).json({ message: "Posts retrieved successfully", posts });
};

module.exports = { createPost, getAllPosts };