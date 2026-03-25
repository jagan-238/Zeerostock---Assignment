import { useState } from "react";
import "../styles.css";

export default function Home() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(
      `http://localhost:5000/search?q=${q}&category=${category}&minPrice=${min}&maxPrice=${max}`
    );
    const result = await res.json();
    setData(result);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">🛒 Inventory Search</div>

      <div className="container">
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Filters</h3>

          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
          </select>

          <input
            type="number"
            placeholder="Min Price"
            onChange={(e) => setMin(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price"
            onChange={(e) => setMax(e.target.value)}
          />
        </div>

        {/* PRODUCTS */}
        <div className="products">
          
          {/* SEARCH BAR */}
          <div className="search-bar">
            <input
              placeholder="Search for products..."
              onChange={(e) => setQ(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {/* RESULTS */}
          {data.length === 0 ? (
            <div className="no-results">No results found</div>
          ) : (
            <div className="grid">
              {data.map((item) => (
                <div key={item.id} className="card">
                  <h3>{item.product_name}</h3>
                  <p>{item.category}</p>
                  <div className="price">₹{item.price}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}