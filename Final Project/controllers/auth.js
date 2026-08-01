const User = require("../model/user");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");

// Signup Handler
const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new AppError("Email is already registered", 400));
        }

        const user = await User.create({ name, email, password });

        const secret = process.env.TOKEN_SECRET_KEY || process.env.JWT_SECRET;
        const token = jwt.sign(
            { _id: user._id, role: user.role },
            secret,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        next(error);
    }
};

// Login Handler
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.comparePassword(password))) {
            return next(new AppError("Invalid email or password", 401));
        }

        const secret = process.env.TOKEN_SECRET_KEY || process.env.JWT_SECRET;
        const token = jwt.sign(
            { _id: user._id, role: user.role },
            secret,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Logged in successfully",
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { signup, login };