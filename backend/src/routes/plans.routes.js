const express = require("express");
const PlansController = require("../controllers/plans.controller");

const router = express.Router();

router.get("/", PlansController.getAll);
router.get("/:id", PlansController.getById);
router.post("/", PlansController.create);