const express = require("express");
const { createPost } = require("../controllers/post");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/posts", auth, createPost);

module.exports = router;
