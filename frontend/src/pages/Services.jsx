export default function Services() {
  const services = [
    'Wheel and Tire Kits',
    'Audio Upgrades',
    'LED Lighting',
    'Custom Roll Cages',
    'Engine and Clutch Tuning',
    'Aftermarket Exhausts',
    'Transmission Repair & Gear Reductions',
    'Suspension Tuning',
    'Oil Changes and General Maintenance',
    'Aftermarket Seats',
    'And More..',
  ];

  return (
    <section>
      <h2>Services</h2>
      <ul className="service-list">
        {services.map((srv, idx) => (
          <li
            key={idx}
            className="service-item"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {srv}
          </li>
        ))}
      </ul>
    </section>
  );
}
