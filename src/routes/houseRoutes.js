const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

router.get("/", houseController.getAllHouses);
router.get("/:id", houseController.getHouse);
router.post("/", houseController.createHouse);
router.put("/:id", houseController.updateHouse);
router.delete("/:id", houseController.deleteHouse);


module.exports = router;
