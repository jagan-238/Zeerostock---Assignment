const express = require("express");
const { searchItems } = require("../controllers/searchController");

const router = express.Router();

router.get("/search", searchItems);

module.exports = router;