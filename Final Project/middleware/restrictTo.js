const AppError = require("../utils/AppError");

const restrictTo = (...roles) => {
  return async (req, res, next) => {
    const user = req.user;
    if (!roles.includes(user.role)) {
      return next(new AppError("You are not authorized", 403));
    }
    next();
  };
};

module.exports = restrictTo;
