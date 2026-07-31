const User = require("../model/user");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");

//Signup Handler
const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError("Email is already registered", 400);
    }

    //create user with hashed pass with Pre-save Hook in Mongoose
    const user = await User.create({ name, email, password });

    //create JWT Token
    const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: "7d" }
    );

    res.status(201).json({
        message: "User registered successfully",
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
};

//Login Handler
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // 💡 إضافة .select("+password") هيجبر Mongoose يجيب الباسورد المشفرة للتحقق
        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.comparePassword(password))) {
            throw new AppError("Invalid email or password", 401);
        }

        const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.TOKEN_SECRET_KEY,
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