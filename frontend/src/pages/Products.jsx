import products from '../data/products.js';

export default function Products({ search, onSearch, onAdd }) {
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
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
          <li key={item.id}>
            <strong>{item.name}</strong> - ${item.price}
            <p>{item.description}</p>
            <button onClick={() => onAdd(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
