const express = require("express");
const router = express.Router();

const moduleController = require("../controller/module");
router.get("/", moduleController.findAll);
router.get("/:id", moduleController.findModuleWithId);
router.post("/", moduleController.create);

module.exports = router;
