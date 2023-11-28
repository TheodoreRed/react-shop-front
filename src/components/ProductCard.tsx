import Product from "../models/Product";
import "./ProductCard.css";
import comingSoon from "../assets/coming-soon.jpg";
import { Link } from "react-router-dom";

interface Props {
  product: Product | null;
}

const ProductCard = ({ product }: Props) => {
  return (
    <li className="ProductCard">
      {product ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </li>
  );
};

export default ProductCard;
