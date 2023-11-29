import CartItem from "../models/CartItem";
import "./CartRow.css";
import comingSoon from "../assets/coming-soon.jpg";
import CartContext from "../context/CartContext";
import { useContext } from "react";

interface Props {
  item: CartItem;
}

const CartRow = ({ item }: Props) => {
  const { deleteFromUserCart, updateUserItemQuantity } =
    useContext(CartContext);

  const handleDecrement = () => {
    if (item && item.product._id) {
      item.quantity--;
      updateUserItemQuantity(item, item.product._id);
    }
  };
  const handleIncrement = () => {
    if (item && item.product._id) {
      item.quantity++;
      updateUserItemQuantity(item, item.product._id);
    }
  };

  return (
    <tr key={item._id}>
      <td>
        <img
          src={item.product.photoURL ?? comingSoon}
          alt={item.product.name}
        />
      </td>
      <td>{item.product.name}</td>
      <td>${item.product.price.toFixed(2)}</td>
      <td className="quantityBtnContainer">
        <button
          className="quantityBtn"
          onClick={() => handleDecrement()}
          disabled={!(item.quantity > 1)}
        >
          -
        </button>
        {item.quantity}
        <button className="quantityBtn" onClick={() => handleIncrement()}>
          +
        </button>
      </td>
      <td>
        <button
          id="deleteBtn"
          onClick={() => deleteFromUserCart(item.product._id!)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
