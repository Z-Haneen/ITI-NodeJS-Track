const express = require("express");
const {
  createUser,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  upadateUserPatchMethod,
  deleteUser,
} = require("../controllers/user");
const {
  updateUserSchema,
  createUserSchema,
} = require("../utils/validate-shema/user");
const validate = require("../middleware/joi-validate");
const router = express.Router();
const { uploadOnDisk, uploadOnMomory } = require("../middleware/upload-image");
const uplaodImageKit = require("../middleware/image-kit");
// const upload = multer({ storage: diskStorage });

router.post(
  "/users",
  uploadOnMomory.single("img"),
  uplaodImageKit(false, "user-iti"),
  validate(createUserSchema),
  createUser,
);

router.get("/users", getAllUsers);

router.get("/users/:id", getOneUser);

router.put("/users/:id", updateUserPutMethod);

router.patch("/users/:id", validate(updateUserSchema), upadateUserPatchMethod);

router.delete("/users/:id", deleteUser);

module.exports = router;
