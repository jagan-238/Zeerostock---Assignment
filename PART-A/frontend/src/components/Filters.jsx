export default function Filters({ setCategory, setMin, setMax }) {
  return (
    <div className="filters">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Furniture">Furniture</option>
      </select>

      <input type="number" placeholder="Min Price" onChange={(e) => setMin(e.target.value)} />
      <input type="number" placeholder="Max Price" onChange={(e) => setMax(e.target.value)} />
    </div>
  );
}