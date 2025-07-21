import products from '../data/products.js';

export default function Products({ search, onSearch, onAdd }) {
  const items = [
    'Lift Kit',
    'LED Lights',
    'Roof Rack',
    'Winch',
    'Wheels',
    'Tires',
    'Lift Kits',
    'Audio',
    'ECU Tuning',
    'Performance Parts',
  ];
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section>
      <h2>Products</h2>
      {/* Wheels, Tires, Lift Kits, Audio, ECU Tuning, Performance Parts and More Sold and Installed Here */}
      <p>
        Wheels, Tires, Lift Kits, Audio, ECU Tuning, Performance Parts and More
        Sold and Installed Here.
      </p>
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
