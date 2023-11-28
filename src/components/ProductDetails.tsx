import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductDetails.css";
import Product from "../models/Product";
import { useParams } from "react-router-dom";
import { getProductByID } from "../services/productService";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  // bring down id from path params
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductByID(id).then((res) => setProduct(res));
    }
  }, [id]);

  return (
    <div className="ProductDetails">
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetails;
