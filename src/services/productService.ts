import axios from "axios";
import Product from "../models/Product";
import Query from "../models/Query";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

/* export const getAllProducts = (): Promise<Product[]> => {
  return axios.get(`${baseUrl}/products`).then((res) => {
    return res.data;
  });
}; */

export const getAllProducts = async (
  maxPrice: string,
  includes: string,
  limit: string
): Promise<Product[]> => {
  const params: Query = {
    ...(maxPrice ? { "max-price": maxPrice } : {}),
    ...(includes ? { includes } : {}),
    ...(limit ? { limit } : {}),
  };

  return (
    await axios.get(`${baseUrl}/products`, {
      params,
    })
  ).data;
};

export const getProductByID = async (id: string): Promise<Product> => {
  return (await axios.get(`${baseUrl}/products/${encodeURIComponent(id)}`))
    .data;
};
