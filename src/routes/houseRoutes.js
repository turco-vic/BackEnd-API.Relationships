const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

router.get("/", houseController.getAllHouses);
router.get("/:id", houseController.getHouse);

module.exports = router;
