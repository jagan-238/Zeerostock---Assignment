const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

// ✅ IMPORTANT: assign to variables
const supplierRoutes = require("./routes/supplierRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", supplierRoutes);
app.use("/", inventoryRoutes);


app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});