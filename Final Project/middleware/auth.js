const util = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const AppError = require("../utils/AppError");
const jwtVerifyPromise = util.promisify(jwt.verify);

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return next(new AppError("Please login to access this route", 401));
    }

    const secret = process.env.TOKEN_SECRET_KEY || process.env.JWT_SECRET;
    const payload = await jwtVerifyPromise(token, secret);

    const user = await User.findById(payload._id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;