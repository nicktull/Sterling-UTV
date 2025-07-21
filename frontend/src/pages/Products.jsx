import products from '../data/products.js';
import wheel from '../assets/icons/wheel.svg';
import tire from '../assets/icons/tire.svg';
import lift from '../assets/icons/lift.svg';
import audio from '../assets/icons/audio.svg';
import ecu from '../assets/icons/ecu.svg';
import part from '../assets/icons/part.svg';

export default function Products({ search, onSearch, onAdd }) {
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const icons = {
    Wheels: wheel,
    Tires: tire,
    'Lift Kits': lift,
    Audio: audio,
    'ECU Tuning': ecu,
    'Performance Parts': part,
  };
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
      {categories.map((cat) => {
        const items = grouped[cat] || [];
        if (items.length === 0) return null;
        return (
          <div key={cat}>
            <h3 className="category-heading">{cat}</h3>
            <ul>
              {items.map((item) => (
                <li key={item.id} className="product-item">
                  <img
                    className="product-icon"
                    src={icons[item.category]}
                    alt={item.category}
                  />
                  <div>
                    <strong>{item.name}</strong> - ${item.price}
                    <p>{item.description}</p>
                    <button onClick={() => onAdd(item)}>Add to Cart</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
