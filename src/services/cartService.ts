import axios from "axios";
import CartItem from "../models/CartItem";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

// Get the cart of a specific user
export const getUserCartItems = async (userId: string): Promise<CartItem[]> => {
  return (
    await axios.get(`${baseUrl}/users/${encodeURIComponent(userId)}/cart`)
  ).data;
};

// Add cartItem to a users cart
export const addCartItem = async (
  userId: string,
  cartItem: CartItem
): Promise<CartItem> => {
  return (
    await axios.post(
      `${baseUrl}/users/${encodeURIComponent(userId)}/cart`,
      cartItem
    )
  ).data;
};

// Update the quantity of a given cart item.
export const updateItemQuantity = async (
  userId: string,
  updatedCartItem: CartItem,
  productId: string
): Promise<CartItem> => {
  return (
    await axios.patch(
      `${baseUrl}/users/${encodeURIComponent(userId)}/cart/${encodeURIComponent(
        productId
      )}`,
      updatedCartItem
    )
  ).data;
};

// Remove a user’s specific cart item
export const deleteCartItem = async (
  userId: string,
  productId: string
): Promise<CartItem> => {
  return (
    await axios.delete(
      `${baseUrl}/users/${encodeURIComponent(userId)}/cart/${encodeURIComponent(
        productId
      )}`
    )
  ).data;
};

// Remove all of the cart items from a specific user
export const deleteUserCart = async (userId: string): Promise<CartItem> => {
  return (
    await axios.delete(`${baseUrl}/users/${encodeURIComponent(userId)}/cart`)
  ).data;
};
