const User = require("../model/user");
const AppError = require("../utils/AppError");

//Create Admin only avaliable for admin and super admin
const createAdmin = async (req, res, next) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError("Email already exists", 400);
    }

    const imageUrl = req.images ? req.images[0] : null;

    const admin = await User.create({
        name,
        email,
        password,
        role: "admin",
        image: imageUrl
    });

    res.status(201).json({ message: "Admin created successfully", admin });
};

// 📋 Get All Users (Protected)
const getAllUsers = async (req, res, next) => {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
};

const getOneUser = async (req, res, next) => {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) throw new AppError("User not found", 404);
    res.status(200).json({ user });
};

const updateUserPutMethod = async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) throw new AppError("User not found", 404);
    res.status(200).json({ message: "User updated", user });
};

const upadateUserPatchMethod = async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) throw new AppError("User not found", 404);
    res.status(200).json({ message: "User updated", user });
};

const deleteUser = async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new AppError("User not found", 404);
    res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
    createAdmin,
    getAllUsers,
    getOneUser,
    updateUserPutMethod,
    upadateUserPatchMethod,
    deleteUser
};