const CartItem = ({ item, updateQty, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => updateQty(item._id, e.target.value)}
      />
      <button onClick={() => removeItem(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
