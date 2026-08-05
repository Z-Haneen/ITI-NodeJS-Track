require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/not-found");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));
app.use(cors());

app.use(userRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  mongoose
    .connect("mongodb://127.0.0.1:27017/node-js-iti")
    .then(() => console.log("DB Connected!"));
});
