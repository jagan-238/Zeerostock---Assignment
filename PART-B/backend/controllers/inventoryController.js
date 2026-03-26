const Inventory = require("../models/Inventory");
const Supplier = require("../models/Supplier");

// POST /inventory
exports.createInventory = async (req, res) => {
  try {
    const { supplier_id, quantity, price } = req.body;

    // ✅ Check supplier exists
    const supplier = await Supplier.findById(supplier_id);
    if (!supplier) {
      return res.status(400).json({ message: "Invalid supplier" });
    }

    // ✅ Validate rules
    if (quantity < 0 || price <= 0) {
      return res.status(400).json({ message: "Invalid quantity or price" });
    }

    const item = await Inventory.create(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /inventory
exports.getInventory = async (req, res) => {
  const data = await Inventory.find().populate("supplier_id");
  res.json(data);
};

// ⭐ REQUIRED QUERY
exports.getSummary = async (req, res) => {
  const data = await Inventory.aggregate([
    {
      $group: {
        _id: "$supplier_id",
        totalValue: { $sum: { $multiply: ["$quantity", "$price"] } },
        items: { $push: "$$ROOT" }
      }
    },
    { $sort: { totalValue: -1 } }
  ]);

  res.json(data);
};