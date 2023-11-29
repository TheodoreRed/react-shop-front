import { Link } from "react-router-dom";
import "./Header.css";
import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const sum = cart.reduce((sum, curr) => {
      return sum + curr.quantity;
    }, 0);
    setCartTotal(sum);
  }, [cart]);
  return (
    <header className="Header">
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <div className="topRightNav">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <p className="cartQuantityDisplay">{`(${cartTotal})`}</p>
      </div>
    </header>
  );
};

export default Header;
