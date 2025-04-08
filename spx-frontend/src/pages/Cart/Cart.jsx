import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";

const Cart = () => {
  const { cart, updateQty, removeItem } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          updateQty={updateQty}
          removeItem={removeItem}
        />
      ))}
      <OrderSummary cart={cart} />
    </div>
  );
};

export default Cart;
