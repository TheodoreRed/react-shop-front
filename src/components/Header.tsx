import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <Link to="/products">Products</Link>
    </header>
  );
};

export default Header;
