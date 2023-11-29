import { ReactNode, useContext, useEffect, useState } from "react";
import CartItem from "../models/CartItem";
import CartContext from "./CartContext";
import {
  addCartItem,
  getUserCartItems,
  deleteCartItem,
  deleteUserCart,
  updateItemQuantity,
} from "../services/cartService";
import UserContext from "./UserContext";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user && user._id) {
      getUserCartItems(user._id).then((res) => {
        setCart(res);
      });
    }
  }, [user]);

  const addToCart = async (item: CartItem) => {
    if (user && user._id) {
      await addCartItem(user._id, item);
      setCart(await getUserCartItems(user._id));
    }
  };

  const deleteFromUserCart = async (productId: string) => {
    if (user && user._id) {
      await deleteCartItem(user._id, productId);
      setCart(await getUserCartItems(user._id));
    }
  };

  const deleteUserEntireCart = async () => {
    if (user && user._id) {
      await deleteUserCart(user._id);
      setCart(await getUserCartItems(user._id));
    }
  };

  const updateUserItemQuantity = async (item: CartItem, productId: string) => {
    if (user && user._id) {
      await updateItemQuantity(user._id, item, productId);
      setCart(await getUserCartItems(user._id));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromUserCart,
        deleteUserEntireCart,
        updateUserItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
