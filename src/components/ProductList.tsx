import Product from "../models/Product";
import ProductCard from "./ProductCard";
import "./ProductList.css";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <ul className="ProductList">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
