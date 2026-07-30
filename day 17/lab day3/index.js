const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/not-found");
app.use(express.json());

app.use(userRouter);

app.use(notFoundHandler);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
