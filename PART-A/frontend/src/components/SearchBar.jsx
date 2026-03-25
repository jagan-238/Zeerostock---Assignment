export default function SearchBar({ setQ }) {
  return (
    <input
      placeholder="Search product..."
      onChange={(e) => setQ(e.target.value)}
    />
  );
}