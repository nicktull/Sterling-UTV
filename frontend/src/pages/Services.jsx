export default function Services() {
  const services = [
    'Routine Maintenance',
    'Lift Kit Installation',
    'Diagnostics',
    'Custom Fabrication',
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
