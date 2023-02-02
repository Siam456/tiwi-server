const express = require("express");
const router = express.Router();
const avatarUpload = require("../middleware/avaterupload");

const tutorialController = require("../controller/tutorial");
router.get("/", tutorialController.findAll);
router.post("/", avatarUpload, tutorialController.create);

module.exports = router;
