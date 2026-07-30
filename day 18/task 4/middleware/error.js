const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return res.status(400).json({ message: `Duplicate value for ${field}` });
  }
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "invalid id format" });
  }
  res.status(500).json({ message: "Internal server error" });
};

module.exports = errorHandler;
