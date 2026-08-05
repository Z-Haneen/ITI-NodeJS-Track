const User = require("../model/user");
const AppError = require("../utils/AppError");

// Create Admin
const createAdmin = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new AppError("Email already exists", 400));
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
    } catch (error) {
        next(error);
    }
};

// Get All Users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select("-password");
        // إرجاع الـ Array مباشر لتتوافق مع الـ HTML Dashboard والمطلوب
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Get One User
const getOneUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return next(new AppError("User not found", 404));
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

// Update User (PUT)
const updateUserPutMethod = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return next(new AppError("User not found", 404));
        res.status(200).json({ message: "User updated", user });
    } catch (error) {
        next(error);
    }
};

// Update User (PATCH)
const upadateUserPatchMethod = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return next(new AppError("User not found", 404));
        res.status(200).json({ message: "User updated", user });
    } catch (error) {
        next(error);
    }
};

// Delete User
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return next(new AppError("User not found", 404));
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createAdmin,
    getAllUsers,
    getOneUser,
    updateUserPutMethod,
    upadateUserPatchMethod,
    deleteUser
};