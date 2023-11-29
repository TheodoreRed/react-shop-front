import Product from "../models/Product";
import "./ProductCard.css";
import comingSoon from "../assets/coming-soon.jpg";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import UserContext from "../context/UserContext";

interface Props {
  product: Product | null;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  return (
    <li className="ProductCard">
      {product ? (
        <>
          <Link to={`/products/${encodeURIComponent(product._id!)}`}>
            <div className="namePriceContainer">
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
            </div>

            <img
              className="productImage"
              src={product.photoURL ?? comingSoon}
              alt={product.name}
            />
          </Link>
          <div className="addToCartBtn">
            <button
              onClick={() =>
                addToCart({ userId: user?._id!, product, quantity: 1 })
              }
            >
              Add to cart
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </li>
  );
};

export default ProductCard;
