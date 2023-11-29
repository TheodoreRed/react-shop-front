import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/CartContext";
import CartRow from "./CartRow";

const Cart = () => {
  const { cart, deleteUserEntireCart } = useContext(CartContext);
  return (
    <div className="Cart">
      <button
        onClick={() => {
          deleteUserEntireCart();
        }}
      >
        Clear all cart items
      </button>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartRow key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
