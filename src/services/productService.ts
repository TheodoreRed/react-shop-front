import axios from "axios";
import Product from "../models/Product";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const getAllProducts = (): Promise<Product[]> => {
  return axios.get(`${baseUrl}/products`).then((res) => {
    return res.data;
  });
};
