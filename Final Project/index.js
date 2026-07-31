require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/not-found");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const User = require("./model/user");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));
app.use(cors());

app.use('/api', userRouter);
app.use('/api', authRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("DB Connected!");
  const superAdmin = await User.findOne({
    email: process.env.SUPERADMIN_EMAIL,
  });
  if (!superAdmin) {
    const superAmin = await User.create({
      name: process.env.SUPERADMIN_NAME,
      email: process.env.SUPERADMIN_EMAIL,
      password: process.env.SUPERADMIN_PASSWORD,
      role: "superAdmin",
    });
  }
});
