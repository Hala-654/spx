const OrderSummary = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <p>Total: ${total.toFixed(2)}</p>
      <button>Checkout</button>
    </div>
  );
};

export default OrderSummary;
