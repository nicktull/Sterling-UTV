import products from '../data/products.js';

export default function Products({ search, onSearch, onAdd }) {
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const grouped = filtered.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

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
      {categories.map((cat, idx) => {
        const items = grouped[cat] || [];
        if (items.length === 0) return null;
        return (
          <div key={cat}>
            <h3 className="category-heading" style={{ animationDelay: `${idx * 0.1}s` }}>
              <span className="category-icon">&#9656;</span>
              {cat}
            </h3>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> - ${item.price}
                  <p>{item.description}</p>
                  <button onClick={() => onAdd(item)}>Add to Cart</button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
