const express = require("express");
const {
  createInventory,
  getInventory,
  getSummary
} = require("../controllers/inventoryController");

const router = express.Router();

router.post("/inventory", createInventory);
router.get("/inventory", getInventory);
router.get("/inventory-summary", getSummary);

module.exports = router;