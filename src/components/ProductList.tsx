import { useEffect, useState } from "react";
import Product from "../models/Product";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import { getAllProducts } from "../services/productService";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  //const [maxPrice, setMaxPrice] = useState("");
  //const [includes, setIncludes] = useState("");
  //const [limit, setLimit] = useState("");

  const maxPrice = searchParams.get("max-price") ?? "";
  const includes = searchParams.get("includes") ?? "";
  const limit = searchParams.get("limit") ?? "";

  useEffect(() => {
    getAllProducts(maxPrice, includes, limit).then((res) => setProducts(res));
  }, [maxPrice, includes, limit]);

  return (
    <div className="ProductList">
      <Filter />
      <ul className="mapContainer">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
