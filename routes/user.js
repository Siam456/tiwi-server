const express = require("express");
const router = express.Router();
const avatarUpload = require("../middleware/avaterupload");

const userController = require("../controller/user");
router.get("/", userController.findAll);
router.post("/login", avatarUpload, userController.create);

module.exports = router;
