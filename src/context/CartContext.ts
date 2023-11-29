import { createContext } from "react";
import CartItem from "../models/CartItem";

interface CartContextModel {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  deleteFromUserCart: (productId: string) => void;
  deleteUserEntireCart: () => void;
  updateUserItemQuantity: (item: CartItem, productId: string) => void;
}

const defaultValues: CartContextModel = {
  cart: [],
  addToCart: () => {},
  deleteFromUserCart: () => {},
  deleteUserEntireCart: () => {},
  updateUserItemQuantity: () => {},
};

const CartContext = createContext(defaultValues);

export default CartContext;
