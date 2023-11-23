import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { getAllProducts } from "./services/productService";
import Product from "./models/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("use effect ran");
    getAllProducts().then((res) => setProducts(res));
  }, [products]);

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
