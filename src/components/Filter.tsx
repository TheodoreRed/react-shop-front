import { FormEvent, useState } from "react";
import "./Filter.css";
import { useNavigate } from "react-router-dom";
import Query from "../models/Query";

const Filter = () => {
  const [maxPrice, setMaxPrice] = useState("");
  const [includes, setIncludes] = useState("");
  const [limit, setLimit] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const searchParams: Query = {};
    //updateMP(maxPrice);
    if (maxPrice) {
      searchParams["max-price"] = maxPrice;
    }
    //updateI(includes);
    if (includes) {
      searchParams.includes = includes;
    }
    //updateL(limit);
    if (limit) {
      searchParams.limit = limit;
    }
    navigate(`/products?${new URLSearchParams({ ...searchParams })}`);
  };
  return (
    <form className="Filter" onSubmit={submitHandler}>
      <label htmlFor="max-price">Max Price</label>
      <input
        type="number"
        name="max-price"
        id="max-price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <label htmlFor="substring">Includes</label>
      <input
        type="text"
        name="substring"
        id="substring"
        value={includes}
        onChange={(e) => setIncludes(e.target.value)}
      />
      <label htmlFor="limit">Limit</label>
      <input
        type="number"
        name="limit"
        id="limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      <button>Filter</button>
    </form>
  );
};

export default Filter;
