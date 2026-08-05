const AppError = require("../utils/AppError");
const fs = require("fs/promises");
const { readFile, writeFile } = require("../utils/file-opration");

const userFile = "model/users.json";
const createUser = async (req, res, next) => {
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    throw new AppError("Please provide all the fields", 400);
  }
  const users = await readFile(userFile);
  if (users.some((user) => user.email === email)) {
    throw new AppError("Email already exists", 400);
  }
  const user = {
    id: users.length + 1,
    name,
    age,
    email,
  };
  users.push(user);
  writeFile(userFile, users);
  res.status(201).json({ message: "User created successfully", user });
};
const getAllUsers = async (req, res, next) => {
  const users = await readFile(userFile);
  res.status(200).json({ message: "Users retrieved successfully", users });
};
const getOneUser = async (req, res) => {
  const userId = req.params.id;
  const users = await readFile(userFile);
  const user = users.find((user) => user.id.toString() === userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  res.status(200).json({ message: "User retrieved successfully", user });
};

const updateUserPutMethod = async (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  if (!user || !user.name || !user.age || !user.email || !user.id) {
    throw new AppError("Please provide all the fields", 400);
  }
  const users = await readFile(userFile);
  const updateUser = users.find((user) => user.id.toString() === userId);
  if (!updateUser) {
    throw new AppError("User not found", 404);
  }
  users.splice(users.indexOf(updateUser), 1, user);
  writeFile(userFile, users);
  res.status(200).json({ message: "User updated successfully", user });
};
const upadateUserPatchMethod = async (req, res) => {
  const userId = req.params.id;
  const body = req.body;
  const users = await readFile(userFile);
  const user = users.find((user) => user.id.toString() === userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const updatedUser = { ...user, ...body };
  users.splice(users.indexOf(user), 1, updatedUser);
  writeFile(userFile, users);
  res
    .status(200)
    .json({ message: "User updated successfully", user: updatedUser });
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const users = await readFile(userFile);
  const user = users.find((user) => user.id.toString() === userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  users.splice(users.indexOf(user), 1);
  writeFile(userFile, users);
  res.status(200).json({ message: "User deleted successfully", user });
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  upadateUserPatchMethod,
  deleteUser,
};
