export default function Cart({ cart, onRemove }) {
  return (
    <section>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button onClick={() => onRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
