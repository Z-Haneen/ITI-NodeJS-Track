require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/not-found");
const User = require("./model/user");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Cached Connection for Serverless Environments
let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("DB Connected Successfully!");

    if (process.env.SUPERADMIN_EMAIL) {
      const superAdmin = await User.findOne({ email: process.env.SUPERADMIN_EMAIL });
      if (!superAdmin) {
        await User.create({
          name: process.env.SUPERADMIN_NAME,
          email: process.env.SUPERADMIN_EMAIL,
          password: process.env.SUPERADMIN_PASSWORD,
          role: "superAdmin",
        });
      }
    }
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

// Middleware to ensure DB is connected before handling routes
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use('/api', userRouter);
app.use('/api', authRouter);

app.use(notFoundHandler);
app.use(errorHandler);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;