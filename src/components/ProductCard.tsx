import Product from "../models/Product";
import "./ProductCard.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <li className="ProductCard">
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img className="productImage" src={product.photoURL} alt={product.name} />
    </li>
  );
};

export default ProductCard;
