export default function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <section>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - ${item.price}{' '}
                <button onClick={() => onRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      )}
    </section>
  );
}
