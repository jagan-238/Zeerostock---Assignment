export default function Results({ data }) {
  if (data.length === 0) return <p>No results found</p>;

  return (
    <div className="grid">
      {data.map(item => (
        <div key={item.id} className="card">
          <h3>{item.product_name}</h3>
          <p>{item.category}</p>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}