export default function Products({ search, onSearch, onAdd }) {
  const items = ['Lift Kit', 'LED Lights', 'Roof Rack', 'Winch'];
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <ul>
        {filtered.map((item) => (
          <li key={item}>
            {item}{' '}
            <button onClick={() => onAdd(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
