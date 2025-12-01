const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/", UserController.create);

module.exports = router;