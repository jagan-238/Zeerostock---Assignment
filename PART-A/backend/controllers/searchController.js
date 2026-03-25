const { inventory } = require("../data/inventoryData");

exports.searchItems = (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let result = [...inventory];

  if (q) {
    result = result.filter(item =>
      item.product_name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    result = result.filter(item => item.category === category);
  }

  if (minPrice && !isNaN(minPrice)) {
    result = result.filter(item => item.price >= Number(minPrice));
  }

  if (maxPrice && !isNaN(maxPrice)) {
    result = result.filter(item => item.price <= Number(maxPrice));
  }

  res.json(result);
};